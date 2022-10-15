import React from 'react';

const MakeAppointmentForm = () => {
    return(
        <form id="Make-appointment-form" className="d-flex flex-column">
        <div id="dateTime" className="d-flex flex-column">
        <label>Начало работы </label>
                <input type="datetime-local" name="date"/>
        <label>Конец работы </label>
                <input type="datetime-local" name="date"/>
        </div>
        <div className="d-flex flex-column">
        <label>Выбор ТС </label>
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
        <div className="d-flex flex-column">
            <input type="text" className="input-placeholder" placeholder="ФИО ответственного"></input>
            <button type='submit' className='w-25 ms-auto mt-3'>Оформить</button>
        </div>
    </form>
    )
}

export default MakeAppointmentForm;