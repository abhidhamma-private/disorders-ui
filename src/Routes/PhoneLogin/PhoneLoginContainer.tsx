import React from 'react';
import { Mutation } from 'react-apollo';
import { toast } from 'react-toastify';
import { RouteComponentProps } from '../../../node_modules/@types/react-router';
import PhoneLoginPresenter from './PhoneLoginPresenter';
import { PHONE_SIGN_IN } from './PhoneQueries';

interface IState {
  countryCode: string;
  phoneNumber: string;
}

interface IMutationInterface {
  phoneNumber: string;
}

class PhoneSignInMutation extends Mutation<any, IMutationInterface> {}

class PhoneLoginContainer extends React.Component<
  RouteComponentProps<any>,
  IState
> {
  public state = {
    countryCode: '+82',
    phoneNumber: '',
  };

  public render() {
    const { countryCode, phoneNumber } = this.state;
    return (
      <PhoneSignInMutation
        mutation={PHONE_SIGN_IN}
        variables={{
          phoneNumber: `${countryCode}${phoneNumber}`,
        }}>
        {(mutation, { loading }) => {
          const onSubmit: React.FormEventHandler<HTMLFormElement> = event => {
            event.preventDefault();

            const isValid = /^\+[1-9]{1}[0-9]{7,11}$/.test(
              `${countryCode}${phoneNumber}`
            );
            if (isValid) {
              return;
            } else {
              toast.error('Please write valid Number');
            }

            // tslint:disable-next-line
            console.log(isValid);
          };
          return (
            <PhoneLoginPresenter
              countryCode={countryCode}
              phoneNumber={phoneNumber}
              onInputChange={this.onInputChange}
              onSubmit={onSubmit}
            />
          );
        }}
      </PhoneSignInMutation>
    );
  }

  public onInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = event => {
    const {
      target: { name, value },
    } = event;
    this.setState({
      [name]: value,
    } as any);
  };
}
export default PhoneLoginContainer;
