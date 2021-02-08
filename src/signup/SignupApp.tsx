import React from 'react';
import { Steps, Button, Input, List } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined, LoadingOutlined } from '@ant-design/icons';
import './SignupApp.css';
import { useHistory } from 'react-router-dom';

export type SignupData = {
  name: string,
  taxId: string,
  password: string,
};

type StepProps = {
  data: SignupData,
  setData: (data: SignupData) => void,
  next: () => void,
};

const { Step } = Steps;

const Switch = ({ step, children }: { step: number, children: any }) => {
  return children[step];
}

const NameStep = ({ data, setData, next }: StepProps) => {
  const [name, setName] = React.useState('');

  return (
    <div>
      Name
      <Input
        size="large"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={() => {
        setData({ ...data, name: name });
        next();
      }}>NEXT</Button>
    </div>
  );
}

const TaxIdStep = ({ data, setData, next }: StepProps) => {
  const [taxId, setTaxId] = React.useState('');

  return (
    <div>
      TaxId
      <Input
        size="large"
        value={taxId}
        onChange={(e) => setTaxId(e.target.value)}
      />
      <Button onClick={() => {
        setData({ ...data, taxId: taxId });
        next();
      }}>NEXT</Button>
    </div>
  );
}

const PasswordStep = ({ data, setData, next }: StepProps) => {
  const [password, setPassword] = React.useState('');

  return (
    <div>
      Password
      <Input
        size="large"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={() => {
        setData({ ...data, password: password });
        next();
      }}>NEXT</Button>
    </div>
  );
}

const sleep = (milliseconds: number) => {
  return new Promise<void>(resolve => setTimeout(resolve, milliseconds))
}

const ReviewStep = ({ data, next }: StepProps) => {
  const [showHidden, setShowHidden] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  return (
    <div>
      Review

      <List>
        <div>
          <strong>Name</strong> {data.name}
        </div>
        <div>
          <strong>Tax Id</strong> {data.taxId}
        </div>
        <div>
          <strong>Password</strong>
          {" "}
          <Button
            icon={showHidden ? <EyeOutlined /> : <EyeInvisibleOutlined />}
            onClick={() => setShowHidden(!showHidden)}
          />
          {" "}
          {showHidden ? data.password : '******'}
        </div>
      </List>

      <Button onClick={async () => {
        setLoading(true);

        try {
          await sleep(2500);
          next();
        } finally {
          setLoading(false);
        }

      }}>NEXT {loading && <LoadingOutlined spin />}</Button>
    </div>
  );
}

const SignupApp = () => {
  const history = useHistory();
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({
    name: '',
    taxId: '',
    password: '',
  });

  const next = () => setStep(step + 1);
  const signup = () => {
    window.localStorage.setItem("signup_data", JSON.stringify(data));
    history.replace("/login");
  };

  return (
    <div className="SignupApp">
      <Steps size="small" current={step}>
        <Step title="Name" />
        <Step title="Tax Id" />
        <Step title="Password" />
        <Step title="Review" />
      </Steps>

      <div className="content">
        <Switch step={step}>
          <NameStep data={data} setData={setData} next={next} />
          <TaxIdStep data={data} setData={setData} next={next} />
          <PasswordStep data={data} setData={setData} next={next} />
          <ReviewStep data={data} setData={setData} next={signup} />
        </Switch>
      </div>

      {process.env.NODE_ENV === 'development' &&
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>}
    </div>
  );
}

export default SignupApp;
