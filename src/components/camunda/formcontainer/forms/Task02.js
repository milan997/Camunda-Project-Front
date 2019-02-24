import React from 'react';
import './forms.css';

const Task02 = () => {
    return (
        <form className="UserTaskForm">
            <h2>ПРИЈАВА ЗА ИЗРАДУ ЗАВРШНОГ (BACHELOR) РАДА</h2>
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
                        <td>Име и презиме студента:</td>
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
                    <tr>
                        <td>Студијска група/подгрупа:</td>
                        <td>
                            <input type="text" name="studijskaGrupa" readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>Област из које желим да радим завршни (Bachelor) рад:</td>
                        <td>
                            <input type="text" name="oblast" readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>Наставник код кога желим да радим завршни (Bachelor) рад:</td>
                        <td>
                            <select disabled
                                name="mentor"
                                cam-choices="profesori">
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <span className="formName">Образац Q2.НА.11-02 - Издање 1</span>

            <div style={{clear: "both"}}></div>
            <hr />
            <hr />

            <h2>ЗАХТЕВ ЗА ИЗДАВАЊЕ ЗАДАТКА И ИМЕНОВАЊЕ САСТАВА КОМИСИЈЕ ЗА ОЦЕНУ И ОДБРАНУ ЗАВРШНОГ (BACHELOR) РАДА</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Врста студија:</td>
                        <td>
                            <select name="tipStudija" disabled>
                                <option value="oas">Osnovne akademske studije</option>
                                <option value="oss">Osnovne strukovne studije></option>
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
                            <select
                                name="rukovodilacSP"
                                cam-choices="rukovodstvo">
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">Молимо Вас да наведеном студенту именујте састав комисије за оцену и одбрану
                            завршног
                            (Bachelor) рада. Такође му одредите ментора и доставите нам наслов завршног
                            (Bachelor) рада.
                            Наслов завршног рада мора бити и на српском и енглеском језику.
                            Комисију у саставу од 3-5 чланова чине председник комисије, члан комисије и ментор. Чланови
                            комисије који су
                            по правилу наставници, а изузетно се за члана комисије може одредити асистент са магистратуром
                            или
                            асистент – студент докторских студија који је положио квалификациони испит.
                        <br />
                            Молимо Вас да предлог састава комисије унесете у образац Q2.НА.11-04.
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
                            <input type="text" name="brIndeksa" readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>Студијска група:</td>
                        <td>
                            <input type="text" name="studijskaGrupa" readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>Област из које студент жели да ради завршни (Bachelor) рад:</td>
                        <td>
                            <input type="text" name="oblast" readOnly/>
                        </td>
                    </tr>
                    <tr>
                        <td>Наставник код кога студент жели да ради завршни (Bachelor) рад:</td>
                        <td>
                            <input type="text" name="mentor" readOnly />
                        </td>
                    </tr>
                </tbody>
            </table>
            <span className="formName">Образац Q2.НА.11-03 - Издање 1</span>
            <div className="uslovDiv">
                <label>Uslov</label>
                <input type="checkbox" name="uslov" />
            </div>
        </form>);
}

export default Task02;