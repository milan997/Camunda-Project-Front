import React from 'react';
import './forms.css';

const Task12 = () => {
    return (
        <form className="UserTaskForm">
            <h2>РЕШЕЊЕ О ИМЕНОВАЊУ КОМИСИЈЕ ЗА ОЦЕНУ И OДБРАНУ ЗАВРШНОГ(BACHELOR) РАДА</h2>
            <table>
                <tbody><tr><td colSpan="2">
                    На основу предлога Наставно научног већа департмана, декан Факултета техничких наука је донео Решење којим је у Комисију
                    заoцену иодбрану завршног (Bachelor) рада одредио наведене чланове.
            </td></tr></tbody>
            </table>

            <table>
                <tbody>
                    <tr>
                        <td>Студент:</td>
                        <td>
                            <input type="text" name="imePrezimeStudenta" readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>Број индекса:</td>
                        <td>
                            <input type="text" name="brIndeksa" readOnly/>
                        </td>
                    </tr>
                    <tr>
                        <td>Наслов завршног (bachelor) рада:</td>
                        <td>
                            <input type="text" name="naslovRada" readOnly />
                        </td>
                    </tr>
                </tbody>
            </table>

            <h3>ЧЛАНОВИ КОМИСИЈЕ:</h3>
            <table>
                <tbody>
                    <tr>
                        <td>Председник:</td>
                        <td>
                            <input type="text" name="predsednikKomisije" readOnly/>
                        </td>
                    </tr>
                    <tr>
                        <td>Члан:</td>
                        <td>
                            <input type="text" name="clanKomisije1" readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>Члан:</td>
                        <td>
                            <input type="text" name="clanKomisije2" readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>Члан:</td>
                        <td>
                            <input type="text" name="clanKomisije3" readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>Ментор:</td>
                        <td>
                            <input type="text" name="mentor" readOnly />
                        </td>
                    </tr>
                </tbody>
            </table>

            <table>
                <tbody><tr>
                    <td>Место одбране:</td>
                    <td>
                        <input type="text" name="mestoOdbrane" ></input>
                    </td>
                </tr></tbody>
            </table>

            <table>
                <tbody><tr>
                        <td>Време одбране:</td>
                        <td>
                            <input type="text" name="vremeOdbrane"></input>
                        </td>
                </tr></tbody>
            </table>

            <span className="formName">Образац Q2.НА.11-09 - Издање 1</span>
        </form>);
}

export default Task12;