// bootstrap的提示框封装

const Toast = {
    toast(message, type) {
        let div = document.createElement('div')
        div.style.width = '200px'
        div.style.height = '50px'
        div.style.textAlign = 'center'
        div.style.position = 'fixed'
        div.style.left = '50%'
        div.style.transform = 'translateX(-100px)'
        div.style.top = '40%'
        div.style.transition = 'all 2s'
        div.style.zIndex = 10000
        div.innerHTML = `<div class="alert alert-${type} align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" ><use xlink:href="#${type}"/></svg>
        <br>
        <div>${message}</div>
      </div>`
        document.body.appendChild(div)

        setTimeout(function () {
            div.style.opacity = '0'
            setTimeout(function () {
                div.remove()
            }, 1000)
        }, 500)
    },
    success(message) {
        this.toast(message, 'success')
    },
    fail(message) {
        this.toast(message, 'danger')
    },
    info(message) {
        this.toast(message, 'primary')
    }
}



window.onload = function () {
    let div = document.createElement('div')
    div.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol id="success" fill="currentColor" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
    </symbol>
    <symbol id="primary" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
    </symbol>
    <symbol id="danger" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </symbol>
    </svg>
    `
    document.body.append(div)
}
/* 提示框用法

Toast.success('提示信息')

Toast.fail('错误信息')

Toast.info('提示信息') */
