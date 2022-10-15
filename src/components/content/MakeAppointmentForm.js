import React from 'react';

const MakeAppointmentForm = () => {
    return(
        <form id="Make-appointment-form" className="d-flex flex-column">
        <div id="dateTime" className="d-flex flex-column">
        <label>Начало работы </label>
                <input type="datetime-local" name="date" autoComplete='off' />
        <label>Конец работы </label>
                <input type="datetime-local" name="date" autoComplete='off' />
        </div>
        <div id="selectors" className="d-flex flex-column">
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
        <div id="form-footer" className="d-flex flex-column">
            <input type="text" className="input-placeholder" placeholder="ФИО ответственного"  autoComplete='off' ></input>
            <button type='submit' className='mt-3 pe-2 ps-2 pt-1 pb-1'>Оформить</button>
        </div>
    </form>
    )
}

export default MakeAppointmentForm;