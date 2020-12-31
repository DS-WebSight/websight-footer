import React from 'react';

export default class Logo extends React.Component {
    render() {
        return (
            <a href='https://www.ds.pl/' style={{ outline: 'none', textDecoration: 'none' }}>
                <img width={this.props.size || 160} style={this.props.style}
                    src='/apps/websight-footer/web-resources/images/logo-ds-inline.svg'
                    alt='Dynamic Solutions' />
            </a>
        )
    }
}
