import React from 'react';
import styled from 'styled-components';
import { colors } from '@atlaskit/theme';

import Logo from './Logo.js';

const FooterElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 10px
`;

const ElementsContainer = styled.ul`
    padding-left: 0;
`;

const LinkElement = styled.li`
    display: inline;

    &:not(:first-child) {
        margin-left: 10px;
    }

    &:not(:last-child):after {
        content: '\\B7';
        margin-left: 10px;
    }
`;

const Hyperlink = styled.a`
    color: ${colors.N100};
    cursor: pointer;
`;

const LogoContainer = styled.div`
    margin-top: 10px;
`;

export default class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            versionReportModal: null
        }
    }

    openSystemVersion() {
        import('./VersionReportModal.js')
            .then(versionReportModal => {
                this.setState(
                    { versionReportModal: <versionReportModal.default ref={(element) => this.versionReportModalRef = element} /> },
                    () => this.versionReportModalRef.open()
                );
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        return (
            <FooterElement>
                <ElementsContainer>
                    <LinkElement>
                        <Hyperlink onClick={() => this.openSystemVersion()}>System Version</Hyperlink>
                    </LinkElement>
                    <LinkElement>
                        <Hyperlink href='https://websight.ds.pl'>About WebSight</Hyperlink>
                    </LinkElement>
                    <LinkElement>
                        <Hyperlink href='https://www.ds.pl/contact-us.html'>Contact Us</Hyperlink>
                    </LinkElement>
                </ElementsContainer>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
                {this.state.versionReportModal}
            </FooterElement >
        );
    }
}