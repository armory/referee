import { observer } from 'mobx-react';
import TitledSection from '../../layout/titledSection';
import * as React from 'react';
import { Form, FormLabel } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';
import Info from '../../assets/info.svg';
import './TestingTypeSection.scss';

interface TestingTypeProps {
  testingType: string;
  updateTestingType: (value: string) => void;
}

@observer
export default class ConfigureMetricModal extends React.Component<TestingTypeProps> {
  render(): React.ReactNode {
    const { testingType, updateTestingType } = this.props;

    return (
      <TitledSection title="Testing Type" additionalClassname="testing-type">
        <ReactTooltip className="tooltip" />
        <script src="https://unpkg.com/feather-icons" />
        <div className="testing-type">
          <div className="testing-type-row">
            <FormLabel className="testing-type-label">Type</FormLabel>
            <div className="testing-type-content">
              <div className="testing-type-item">
                <Form.Check
                  onChange={() => {
                    updateTestingType('AA');
                  }}
                  checked={testingType === 'AA'}
                  inline={true}
                  label="A-A"
                  type="radio"
                  id="testing-type-a-a"
                />
                <div className="info-container">
                  <img
                    className="info"
                    width="25px"
                    data-tip="In A-A testing, the experiment is the exact same as the baseline.
                    A-A testing is helpful to confirm that your metrics and execution configurations are working."
                    src={Info}
                  />
                </div>
              </div>
              <div className="testing-type-item">
                <Form.Check
                  onChange={() => {
                    updateTestingType('AB');
                  }}
                  checked={testingType === 'AB'}
                  inline={true}
                  label="A-B"
                  type="radio"
                  id="testing-type-a-b"
                />
                <div className="info-container">
                  <img
                    className="info"
                    width="25px"
                    data-tip="In A-B testing, the experiment is different from the baseline to simulate the way canary
                    would be used in production."
                    src={Info}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </TitledSection>
    );
  }
}
