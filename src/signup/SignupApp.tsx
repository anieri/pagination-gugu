import React from 'react';
import { Steps, Button } from 'antd';

type SignupData = {
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

  return (
    <div>
      Name
      <Button onClick={next}>NEXT</Button>
    </div>
  );
}

const TaxIdStep = ({ data, setData, next }: StepProps) => {

  return (
    <div>
      TaxId
      <Button onClick={next}>NEXT</Button>
    </div>
  );
}

const PasswordStep = ({ data, setData, next }: StepProps) => {

  return (
    <div>
      Password
      <Button onClick={next}>NEXT</Button>
    </div>
  );
}

const ReviewStep = ({ data, setData, next }: StepProps) => {

  return (
    <div>
      Review
      <Button onClick={next}>NEXT</Button>
    </div>
  );
}

const SignupApp = () => {
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({
    name: '',
    taxId: '',
    password: '',
  });

  const next = () => setStep(step + 1);
  const signup = () => alert("HEY!");

  return (
    <div className="SignupApp">
      <Steps size="small" current={step}>
        <Step title="NameStep" />
        <Step title="Tax Id" />
        <Step title="Password" />
        <Step title="Review" />
      </Steps>

      <Switch step={step}>
        <NameStep data={data} setData={setData} next={next} />
        <TaxIdStep data={data} setData={setData} next={next} />
        <PasswordStep data={data} setData={setData} next={next} />
        <ReviewStep data={data} setData={setData} next={signup} />
      </Switch>
    </div>
  );
}

export default SignupApp;
