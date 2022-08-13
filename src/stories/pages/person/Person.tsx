import React from 'react';
import PropTypes from 'prop-types';

export interface IProps {
    /**
     * Kişinin tam adı
     */
    fullName: string;
    /**
     * Kişinin yaşı
     */
    age: number;
    /**
     * Kişinin cinsiyeti
     */
    gender: string;
    /**
     * Kişinin türü
     */
    kind: string;
}

const Person = (props : IProps) => {
    return (
        <div style={{padding:"100px"}}>
            <table>
                <tr>
                    <td><b>Tam Adı:</b></td>
                    <td>{props.fullName}</td>
                </tr>
                <tr>
                    <td><b>Cinsiyet:</b></td>
                    <td>{props.gender}</td>
                </tr>
                <tr>
                    <td><b>Yaş:</b></td>
                    <td>{props.age}</td>
                </tr>
                <tr>
                    <td><b>Tür:</b></td>
                    <td>{props.kind}</td>
                </tr>
            </table>
        </div>
    );
};

Person.propTypes = {
    fullName: PropTypes.string,
    age: PropTypes.number,
    gender: PropTypes.string,
    nationality: PropTypes.string
};

export default Person;