import React from 'react';
import './forms.css';

const Task06 = () => {
    return (
        <form className="UserTaskForm">
            <h2>ЗАДАТАК ЗА ИЗРАДУ ДИПЛОМСКОГ РАДА</h2>
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
                        <td>Студијски програм:</td>
                        <td>
                            <input type="text" name="studijskiProgram" readOnly/>
                        </td>
                    </tr>
                    <tr>
                        <td>Руководилац студијског програма:</td>
                        <td>
                            <select disabled name="rukovodilacSP" cam-choices="rukovodstvo">
                                <option value="ime">ime</option>
                                <option value="ime2">ime2</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table>
                <tbody>
                    <tr>
                        <td>Студент:</td>
                        <td>
                            <input type="text" name="imePrezimeStudenta" readOnly/>
                        </td>
                    </tr>
                    <tr>
                        <td>Број индекса:</td>
                        <td>
                            <input type="text" name="brIndeksa" readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>Област</td>
                        <td>
                            <input type="text" name="oblast" readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>Ментор:</td>
                        <td>
                            <input type="text" name="mentor" readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            НА ОСНОВУ ПОДНЕТЕ ПРИЈАВЕ, ПРИЛОЖЕНЕ ДОКУМЕНТАЦИЈЕ И ОДРЕДБИ СТАТУТА ФАКУЛТЕТА
                            ИЗДАЈЕ СЕ ЗАДАТАК ЗА ЗАВРШНИ (Bachelor) РАД, СА СЛЕДЕЋИМ ЕЛЕМЕНТИМА:
                            <br /> -проблем –тема рада;
                            <br />-начин решавања проблема и начин практичне провере резултата рада, ако је таква провера неопходна;
                            <br />-литература
                    </td>
                    </tr>
                </tbody>
            </table>

            <h3>НАСЛОВ ЗАВРШНOГ (BACHELOR) РАДА:</h3>
            <input type="text" name="naslovRada" readOnly />

            <h3>ТЕКСТ ЗАДАТКА:</h3>
            <textarea type="text" name="tekstZadatka" required ></textarea>
            
            <span className="formName">Образац Q2.НА.11-05 - Издање 1</span>
            <div style={{ clear: "both" }}></div>
        </form>);
}

export default Task06;