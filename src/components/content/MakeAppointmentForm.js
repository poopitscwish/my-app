import React from 'react';

const MakeAppointmentForm = () => {
    <form id="Make-appointment-form" className="d-flex flex-column">
        <div className="d-flex flex-row">
            <input type="text" className="input-placeholder" placeholder="Начало работы"></input>
            <input type="text" className="input-placeholder" placeholder="Конец работы"></input>
        </div>
        <div className="d-flex flex-row">
            <select>
                <option>
                    Машинка 1
                </option>
                <option>
                    Машинка 2
                </option>
                <option>
                    Машинка 3
                </option>
            </select>
            <select>
                <option>
                    Работа на точке
                </option>
                <option>
                    Перевозка
                </option>
            </select>
        </div>
        <div className="d-flex flex-row">
            <input type="text" className="input-placeholder" placeholder="ФИО ответственного"></input>
            <input type="text" className="input-placeholder" placeholder="Конец работы"></input>
        </div>
    </form>
}

export default MakeAppointmentForm;