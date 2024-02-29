import { Formik, Form } from 'formik';
import React from 'react';
import { SelectInput } from '@/app/components/selectInput';
import useLLMEndpointList from '@/app/views/moonshot-desktop/hooks/useLLMEndpointList';
import { TextArea } from '@components/textArea';
import { TextInput } from '@components/textInput';
import { Window } from '@components/window';
import { getWindowId } from '@/app/lib/window-utils';

type WindowChatStartProps = {
  zIndex: number | 'auto';
  windowId: string;
  initialXY: [number, number];
  initialSize: [number, number];
  onWindowChange: (
    x: number,
    y: number,
    width: number,
    height: number,
    scrollTop: number,
    windowId: string
  ) => void;
  onCloseClick: () => void;
  onStartClick: (
    sessionName: string,
    description: string,
    llmEndpoints: string[]
  ) => void;
};

type FormValues = {
  sessionName: string;
  description: string;
  llmEndpoints: string[];
};

const initialFormValues: FormValues = {
  sessionName: '',
  description: '',
  llmEndpoints: [],
};

function WindowCreateSession(props: WindowChatStartProps) {
  const {
    zIndex,
    windowId,
    initialXY,
    initialSize,
    onCloseClick,
    onStartClick,
    onWindowChange,
  } = props;
  const { llmEndpoints, error, isLoading } = useLLMEndpointList();

  async function handleFormSubmit(values: FormValues) {
    onStartClick(values.sessionName, values.description, values.llmEndpoints);
  }

  return (
    <Window
      id={getWindowId(windowId)}
      resizeable
      draggable
      zIndex={zIndex}
      initialXY={initialXY}
      initialWindowSize={initialSize}
      onWindowChange={onWindowChange}
      name="Start New Session"
      styles={{ zIndex: 100 }}
      onCloseClick={onCloseClick}>
      <div className="relative p-4 w-full h-full">
        <Formik<FormValues>
          initialValues={initialFormValues}
          onSubmit={handleFormSubmit}>
          {(formProps) => {
            return (
              <Form>
                <TextInput
                  name="sessionName"
                  label="Session Name"
                  onChange={formProps.handleChange}
                  value={formProps.values.sessionName}
                  onBlur={formProps.handleBlur}
                  error={
                    formProps.touched.sessionName &&
                    formProps.errors.sessionName
                      ? formProps.errors.sessionName
                      : undefined
                  }
                  placeholder="Give an identifier name to this session"
                />
                <TextArea
                  name="description"
                  label="Description"
                  onChange={formProps.handleChange}
                  error={
                    formProps.touched.description &&
                    formProps.errors.description
                      ? formProps.errors.description
                      : undefined
                  }
                  value={formProps.values.description}
                  placeholder="Give a description of this session"
                />
                <SelectInput
                  label="LLM Endpoints"
                  name="llmEndpoints"
                  options={llmEndpoints.map((endpoint) => ({
                    value: endpoint.name,
                    label: endpoint.name,
                  }))}
                  isMulti
                  onSyntheticChange={formProps.handleChange}
                />
                <div
                  className=" absolute bottom-3 text-right"
                  style={{
                    width: 'calc(100% - 30px)',
                  }}>
                  <button
                    className="btn-primary"
                    type="submit">
                    Start
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Window>
  );
}

export { WindowCreateSession };
