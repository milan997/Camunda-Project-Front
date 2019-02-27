import React from 'react';
import './forms.css';

const Task05 = () => {
    return (
        <form className="UserTaskForm">
            <h2>ПРЕДЛОГ САСТАВА КОМИСИЈЕ ЗА ОЦЕНУ И ОДБРАНУ ЗАВРШНОГ (BACHELOR) РАДА</h2>
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
                            <input type="text" name="brIndeksa" readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>Студијски програм:</td>
                        <td>
                            <input type="text" name="studijskiProgram" readOnly />
                        </td>
                    </tr>
                </tbody>
            </table>

            <h3>НАСЛОВ ЗАВРШНOГ (BACHELOR) РАДА (српски):</h3>
            <input type="text" name="naslovRada" readOnly />

            <h3>НАСЛОВ ЗАВРШНOГ (BACHELOR) РАДА (енглески):</h3>
            <input type="text" name="naslovRadaEngleski" readOnly />

            <h2>ПРЕДЛОГ САСТАВА КОМИСИЈЕ ЗА ОЦЕНУ И ОДБРАНУ ЗАВРШНОГ (BACHELOR) РАДА</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Председник:</td>
                        <td>
                            <input type="text" name="predsednikKomisije" readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>Члан (обавезно):</td>
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
            <span className="formName">Образац Q2.НА.11-04 - Издање 1</span>
            <div className="uslovDiv">
                <label htmlFor="uslov" >Uslov</label>
                <input type="checkbox" name="uslov" />
            </div>
        </form>);
}

export default Task05;