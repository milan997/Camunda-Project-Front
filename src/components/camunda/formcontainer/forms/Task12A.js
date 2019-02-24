import React from 'react';
import './forms.css';

const Task12A = () => {
    return (
        <form className="UserTaskForm">
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
                            <input type="text" name="studijskiProgram" readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>Руководилац студијског програма:</td>
                        <td>
                            <select disabled
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
                            <input type="text" name="oblast" readOnly />
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
                            <select required name="predsednikKomisije" cam-choices="profesori" />
                        </td>
                    </tr>
                    <tr>
                        <td>Члан:</td>
                        <td>
                            <select required name="clanKomisije1" cam-choices="profesori" />
                        </td>
                    </tr>
                    <tr>
                        <td>Члан:</td>
                        <td>
                            <select required name="clanKomisije2" cam-choices="profesori" />
                        </td>
                    </tr>
                    <tr>
                        <td>Члан:</td>
                        <td>
                            <select required name="clanKomisije3" cam-choices="profesori" />
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
        </form>);
}

export default Task12A;