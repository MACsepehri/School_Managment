let app = document.getElementById('app');
let main_page_button = document.getElementById('main-page');
let login_page_button = document.getElementById('login-page');
let register_page_button = document.getElementById('register-page');
let dashboard_button = document.getElementById('dashboard-page');

main_page_button.addEventListener('click',(ev)=>{
    app.innerHTML = `
<div>
    <div style="margin-top: 150px;">
        <h2>از اطلاعات دانش آموزان<br>تا <span style="color: var(--blue);">مدیریت آنها</span></h2>
    </div>
    <div>
        <div id="table-top">
            <p>مدیریت در لحظه</p>
        </div>
        <div class="sample-table">
            <h3 style="text-align: right; margin-right: 10px;">اطلاعات دانش آموزان</h3>
            <div>
                <table>
                    <thead>
                        <tr id="table-header">
                            <th>نام فرزند</th>
                            <th>کدملی فرزند</th>
                            <th>نام پدر</th>
                            <th>کدملی پدر</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>مهیار</th>
                            <th>1020317781</th>
                            <th>محسن</th>
                            <th>8135998356</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div id="table-bottom">
            <p>کاملا رایگان</p>
        </div>
    </div>
</div>`;
});

login_page_button.addEventListener('click',(ev)=>{
    app.innerHTML = '';
})