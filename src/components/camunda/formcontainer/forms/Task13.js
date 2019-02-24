import React from 'react';
import './forms.css';

const Task13 = () => {
    return (
        <form className="UserTaskForm">
            <h2>ИЗВЕШТАЈ КОМИСИЈЕО ОЦЕНИ И ОДБРАНИ ЗАВРШНОГ(BACHELOR)РАДА</h2>

            <table>
                <tbody>
                    <tr>
                        <td>Врста студија:</td>
                        <td>
                            <select name="tipStudija" disabled>
                                <option value="oas">Osnovne akademske studije</option>
                                <option value="oss">Osnovne strukovne studije</option>
                            </select>
                        </td>
                    </tr>
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
                </tbody>
            </table>

            <h3>НАСЛОВ ЗАВРШНOГ (BACHELOR) РАДА:</h3>
            <input type="text" name="naslovRada" readonly />

            <h3>ИЗВЕШТАЈ И ЗАКЉУЧАК КОМИСИЈЕ:</h3>
            <textarea type="text" required name="izvestajKomisije"></textarea>

            <table>
                <tbody>
                    <tr>
                        <td>Оцена теоријских основа завршног(Bachelor)рада:</td>
                        <td>
                            <input type="number" min="6" max="10" name="ocenaTeorija" required></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Оцена израде и одбране завршног (Bachelor) рада:</td>
                        <td>
                            <input type="number" min="6" max="10" name="ocenaPrakticni" required></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Коначна оцена завршног (Bachelor)рада:</td>
                        <td>
                            <input type="number" min="6" max="10" name="ocenaKonacna" required></input>
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
                            <input type="text" name="predsednikKomisije" readOnly />
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
            <span className="formName">Образац Q2.НА.11-10 - Издање 1</span>
        </form>);
}

export default Task13;