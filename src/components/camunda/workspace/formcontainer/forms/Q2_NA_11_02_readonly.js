import React from 'react';
import './forms.css';

const Q2_NA_11_02_readonly = () => {
    return (
        <form className="UserTaskForm">
            <h2>ПРИЈАВА ЗА ИЗРАДУ ЗАВРШНОГ (BACHELOR) РАДА</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Врста студија:</td>
                        <td>
                            <select disabled
                                cam-variable-name="tipStudija"
                                cam-variable-type="String">
                                <option value="oas">Osnovne akademske studije</option>
                                <option value="oss">Osnovne strukovne studije></option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Име и презиме студента:</td>
                        <td>
                            <input type="text" readOnly
                                cam-variable-name="imePrezimeStudenta"
                                cam-variable-type="String" />
                        </td>
                    </tr>
                    <tr>
                        <td>Број индекса:</td>
                        <td>
                            <input type="text" readOnly
                                cam-variable-name="brIndeksa"
                                cam-variable-type="String" />
                        </td>
                    </tr>
                    <tr>
                        <td>Студијски програм:</td>
                        <td>
                            <input type="text" readOnly
                                cam-variable-name="studijskiProgram"
                                cam-variable-type="String" />
                        </td>
                    </tr>
                    <tr>
                        <td>Студијска група/подгрупа:</td>
                        <td>
                            <input type="text" readOnly
                                cam-variable-name="studijskaGrupa"
                                cam-variable-type="String" />
                        </td>
                    </tr>
                    <tr>
                        <td>Област из које желим да радим завршни (Bachelor) рад:</td>
                        <td>
                            <input type="text" readOnly
                                cam-variable-name="oblast"
                                cam-variable-type="String" />
                        </td>
                    </tr>
                    <tr>
                        <td>Наставник код кога желим да радим завршни (Bachelor) рад:</td>
                        <td>
                            <input type="text" readOnly
                                cam-variable-name="mentor"
                                cam-variable-type="String" />
                        </td>
                    </tr>
                </tbody>
			</table>
            <label>Uslov: </label>
            <input type="checkbox" required
                cam-variable-name="uslov"
                cam-variable-type="Boolean" />
		</form>);
}
// const field = `                <!-- 				<tr> -->
// <!-- 					<td>Наставник код кога желим да радим завршни (Bachelor) рад:</td> -->
// <!-- 					<td> -->
// <!-- 						<select cam-variable-name="mentor" -->
// <!-- 								cam-variable-type="User" -->
// <!-- 								cam-choices="profesori"> -->
// <!-- 						</select> -->
// <!-- 					</td> -->
// <!-- 				</tr> -->`;

export default Q2_NA_11_02_readonly;