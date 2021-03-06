import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';

const WaterFlowBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    min-width: 650px;
`;

const Column = styled(QueueAnim)`

`;
export default class WaterFlow extends React.Component {
    render() {
        let {column} = this.props;
        let columns = [];
        React.Children.map(this.props.children, (child, index) => {
            if (columns[index % column]) {
                columns[index % column].push(child);
            } else {
                columns[index % column] = [];
                columns[index % column].push(child);
            }
        });
        let childs = columns.map((value, index) => {
            return (
                <Column key={index} type={'bottom'}>
                    {value}
                </Column>
            )
        });
        return (
            <WaterFlowBody>
                {childs}
            </WaterFlowBody>
        );
    }
}

WaterFlow.propTypes = {
    column: PropTypes.number
};