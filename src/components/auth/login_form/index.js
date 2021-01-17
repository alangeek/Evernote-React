import React, { Fragment, useState } from 'react';
import { Button, Field, Control, Input, Column, Section, Help, Label } from "rbx";
import { Redirect } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToRegister, setRedirectToRegister] = useState(false);
  const [redirectToNotes, setRedirectToNotes] = useState(false);
  const [error, setError] = useState(false);

  if(redirectToRegister)
    return <Redirect to={{pathname: "/register"}}/>
  else if(redirectToNotes)
    return <Redirect to={{pathname: "/notes"}}/>

  return (
    <Fragment>
        <Column.Group centered>
          <form>
            <Column size={12}>
              <Field>
                <Label size="small">Email:</Label>
                <Control>
                  <Input 
                    type="email" 
                    required
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </Control>
              </Field>
              <Field>
                <Label size="small">Senha:</Label>
                <Control>
                  <Input 
                    type="password" 
                    required
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </Control>
              </Field>
              <Field>
                <Control>
                  <Column.Group breakpoint="mobile">
                    <Column>
                      <a className="button is-white has-text-custom-color"
                      onClick={e => setRedirectToRegister(true)}
                      >Registrar</a>
                    </Column>
                    <Column>
                      <Button color="custom-color" outlined>Entrar</Button>
                    </Column>
                  </Column.Group>
                </Control>
              </Field>
              { error && <Help color="danger">Email ou senha inválida</Help> }
            </Column>
          </form>
        </Column.Group>
    </Fragment>
  )
}

export default LoginForm;