import React from 'react';
import styled from 'styled-components';
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';

const BundlesContainer = styled.div`
    margin: 10px 0;
`;

const BUNDLES_VERSION_URL = '/apps/websight-system-status/bin/bundles-version-list';

export default class VersionReportModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            bundles: []
        }

        this.getBundleVersionReportList();

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    getBundleVersionReportList() {
        fetch(BUNDLES_VERSION_URL)
            .then(response => {
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.startsWith('application/json')) {
                    response.json().then(data => this.setState({ bundles: data }));
                }
            })
            .catch(error => {
                console.error(error);
            });
    }

    open() {
        this.setState({ isOpen: true });
    }

    close() {
        this.setState({ isOpen: false });
    }

    render() {
        const { isOpen, bundles } = this.state;

        return (
            <ModalTransition>
                {isOpen && (
                    <Modal onClose={this.close} heading="System Components" width='large'>
                        <div>
                            <p>Copyright © 2020 Dynamic Solutions Sp. z o.o. Sp. k.</p>
                            <p>This product includes the following system components:</p>
                        </div>
                        <BundlesContainer>
                            <ol>
                                {Object.keys(bundles).map((key) => {
                                    return <li key={key}>{bundles[key].name + ' (' + bundles[key].version + ')' }</li>;
                                })}
                            </ol>
                        </BundlesContainer>
                    </Modal>
                )}
            </ModalTransition>
        );
    }
}