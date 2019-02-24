import React from 'react';
import './forms.css';

const Task01 = () => {
    return (
        <form className="UserTaskForm">
            <h2>ПРИЈАВА ЗА ИЗРАДУ ЗАВРШНОГ (BACHELOR) РАДА</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Врста студија:</td>
                        <td>
                            <select name="tipStudija" required>
                                <option value="oas">Osnovne akademske studije</option>
                                <option value="oss">Osnovne strukovne studije</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Име и презиме студента:</td>
                        <td>
                            <input type="text" name="imePrezimeStudenta" required />
                        </td>
                    </tr>
                    <tr>
                        <td>Број индекса:</td>
                        <td>
                            <input type="text" name="brIndeksa" required />
                        </td>
                    </tr>
                    <tr>
                        <td>Студијски програм:</td>
                        <td>
                            <input type="text" name="studijskiProgram" required />
                        </td>
                    </tr>
                    <tr>
                        <td>Студијска група/подгрупа:</td>
                        <td>
                            <input type="text" name="studijskaGrupa" required />
                        </td>
                    </tr>
                    <tr>
                        <td>Област из које желим да радим завршни (Bachelor) рад:</td>
                        <td>
                            <input type="text" name="oblast" required />
                        </td>
                    </tr>
                    <tr>
                        <td>Наставник код кога желим да радим завршни (Bachelor) рад:</td>
                        <td>
                            <select required
                                name="mentor"
                                cam-choices="profesori">
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <span className="formName">Образац Q2.НА.11-02 - Издање 1</span>
            <div style={{clear:"both"}}></div>
        </form>);
}

export default Task01;