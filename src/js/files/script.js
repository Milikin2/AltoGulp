// Подключение функционала "Чертогов Фрилансера"
import { isMobile, tabs } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
const purchase__body = document.querySelector(".purchase-body__column-left")

if (purchase__body) {
    purchase__body.addEventListener('click', function (e) {
        if (e.target.classList.contains("tabs__title") && e.target.id == "prepayment") {
            const delivery__container = document.querySelector(".purchase-body__box-delivery")
            delivery__container.insertAdjacentHTML('afterend', `<div class="purchase-body__box purchase-body__box-pay">
                                <div class="heading-body">
                                    <h2 class="heading">Варианты оплаты<span class="green">*</span></h2>
                                </div>
                                <div class="delivery__tabs">
                                    <div data-tabs class="tabs">
                                        <nav data-tabs-titles class="tabs__navigation">
                                            <button type="button" id="individual" class="tabs__title _tab-active">Для физических
                                                лиц</button>
                                            <button type="button" id="entity" class="tabs__title">Для юридических лиц</button>
                                        </nav>
                                        <div data-tabs-body class="tabs__content">
                                            <div class="tabs__body">
                                                <div id="payments-tabs" class="tabgroup">
                                                    <div class="tabgroup__body" id="tab4">
                                                        <div class="payments__item">
                                                            <input type="checkbox" id="paymentsTabs-03">
                                                            <label for="paymentsTabs-03">
                                                                <div class="img-convert">
                                                                    <svg width="32" height="56" viewBox="0 0 32 56"
                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M9.68886 39.5789H9.58566C7.83523 39.5789 6.40234 38.1503 6.40234 36.4051V6.5182C6.40234 4.77295 7.83523 3.3443 9.58566 3.3443H24.4702C26.2207 3.3443 27.6536 4.77295 27.6536 6.5182V36.4051C27.6536 38.1503 26.2207 39.5789 24.4702 39.5789H19"
                                                                            stroke="#B8B8B8" stroke-miterlimit="22.9256"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                        <path
                                                                            d="M15.2339 33.437H27.6496M6.40234 33.437H9.68489H6.40234Z"
                                                                            stroke="#B8B8B8" stroke-miterlimit="22.9256"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                        <path d="M15.3848 36.5079H18.6713"
                                                                            stroke="#B8B8B8" stroke-miterlimit="22.9256"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                        <path
                                                                            d="M9.68945 43.0576V33.1283C9.68945 31.6086 10.9358 30.366 12.46 30.366C13.9842 30.366 15.2305 31.6086 15.2305 33.1283V39.8718C15.2305 41.5577 16.0164 43.0061 17.4334 43.9243C19.2632 45.1115 20.3587 47.2604 20.1047 49.5558"
                                                                            stroke="#B8B8B8" stroke-miterlimit="22.9256"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                        <path
                                                                            d="M24.4707 39.579C26.6776 41.815 26.9753 45.2184 25.3638 47.767C24.7525 48.7326 24.4707 49.7141 24.4707 50.8578V53.6518"
                                                                            stroke="#B8B8B8" stroke-miterlimit="22.9256"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                        <path
                                                                            d="M8.04551 53.5489V52.1835C8.04551 50.6995 7.55729 49.4212 6.56102 48.3131L3.83019 45.2738C2.83789 44.1657 2.3457 42.8874 2.3457 41.4034V27.1446C2.3457 25.6684 2.82995 24.3981 3.81432 23.2939L6.40225 20.3892"
                                                                            stroke="#B8B8B8" stroke-miterlimit="22.9256"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                        <path
                                                                            d="M24.1017 5.73859H9.95141C9.33104 5.73859 8.82812 6.29317 8.82812 6.97728V15.846C8.82812 16.5301 9.33104 17.0847 9.95141 17.0847H24.1017C24.7221 17.0847 25.225 16.5301 25.225 15.846V6.97728C25.225 6.29317 24.7221 5.73859 24.1017 5.73859Z"
                                                                            stroke="#B8B8B8" stroke-miterlimit="22.9256"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                        <path d="M8.82812 8.8927H25.225"
                                                                            stroke="#B8B8B8" stroke-miterlimit="22.9256"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                        <path
                                                                            d="M19.8868 15.6362C20.9106 15.6362 21.7405 14.8088 21.7405 13.7881C21.7405 12.7674 20.9106 11.9399 19.8868 11.9399C18.8631 11.9399 18.0332 12.7674 18.0332 13.7881C18.0332 14.8088 18.8631 15.6362 19.8868 15.6362Z"
                                                                            stroke="#B8B8B8" stroke-miterlimit="22.9256"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                        <path
                                                                            d="M20.8984 12.2407C22.1091 11.4532 23.7602 12.308 23.7602 13.7881C23.7602 15.2682 22.1091 16.123 20.8984 15.3355"
                                                                            stroke="#B8B8B8" stroke-miterlimit="22.9256"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                    </svg>

                                                                </div>
                                                                <div class="text-convert">
                                                                    <h4 class="title">Быстрая оплата - online</h4>
                                                                    <p class="text-10">Оплата банковской картой на сайте
                                                                    </p>
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div class="payments__item">
                                                            <input type="checkbox" id="paymentsTabs-04">
                                                            <label for="paymentsTabs-04">
                                                                <div class="img-convert">
                                                                    <svg width="41" height="42" viewBox="0 0 41 42"
                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M9.94979 7.2113H5.46972C3.50478 7.2113 1.89844 8.75681 1.89844 10.6444C1.89844 12.532 3.50478 14.0775 5.46972 14.0775H33.2024V10.9622C33.2024 8.89753 31.4978 7.2113 29.4052 7.2113H27.9732"
                                                                            stroke="#00AA2E" stroke-miterlimit="22.9256"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                        <path
                                                                            d="M1.89844 10.6808V35.8747C1.89844 37.8594 3.53671 39.4801 5.54832 39.4801H33.3523C35.3614 39.4801 37.0021 37.8618 37.0021 35.8747V32.0025M37.0021 21.3974V17.8236C37.0021 15.7589 35.2976 14.0726 33.2049 14.0726H26.9048"
                                                                            stroke="#00AA2E" stroke-miterlimit="22.9256"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                                            d="M39.16 21.3998H31.3199C28.3675 21.3998 25.9531 23.7848 25.9531 26.7011C25.9531 29.6175 28.3675 32.0024 31.3199 32.0024H39.16V21.3974V21.3998Z"
                                                                            stroke="#00AA2E" stroke-miterlimit="22.9256"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                        <path
                                                                            d="M30.6148 28.8775C31.8302 28.8775 32.8155 27.9042 32.8155 26.7036C32.8155 25.503 31.8302 24.5297 30.6148 24.5297C29.3994 24.5297 28.4141 25.503 28.4141 26.7036C28.4141 27.9042 29.3994 28.8775 30.6148 28.8775Z"
                                                                            stroke="#00AA2E" stroke-miterlimit="22.9256"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                        <path
                                                                            d="M8.21094 11.5688L17.3577 2.53355C18.2444 1.65768 19.6911 1.65768 20.5778 2.53355L29.7246 11.5688"
                                                                            stroke="#00AA2E" stroke-miterlimit="22.9256"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                        <path
                                                                            d="M13.8008 6.04431C16.8415 8.37349 21.0932 8.37349 24.1339 6.04431"
                                                                            stroke="#00AA2E" stroke-miterlimit="22.9256"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                        <path d="M18.9297 12.1025L20.9388 10.0427"
                                                                            stroke="#00AA2E" stroke-miterlimit="22.9256"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                    </svg>

                                                                </div>
                                                                <div class="text-convert">
                                                                    <h4 class="title">Перевод по номеру счёта</h4>
                                                                    <p class="text-10">Оплата с кошельков</p>
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div class="payments__item">
                                                            <input type="checkbox" id="paymentsTabs-05">
                                                            <label for="paymentsTabs-05">
                                                                <div class="img-convert">
                                                                    <svg width="75" class="sbp" height="40" viewBox="0 0 75 40"
                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M63.8722 14.88V25.2H67.5013V17.92H70.969V25.2H74.5174V14.88H63.8722ZM57.098 14.32H60.4045L62.098 11.28H56.7755C52.9045 11.36 50.3238 14.64 50.3238 18.72C50.3238 23.52 53.0658 25.44 56.3722 25.44C59.7593 25.44 62.2593 23.28 62.1787 20.32C62.098 18 60.1625 15.76 57.5819 15.76C56.1303 15.76 54.7593 16.24 53.8722 17.12C53.9529 15.44 55.4045 14.32 57.098 14.32ZM56.2109 18.4C57.5013 18.4 58.3884 19.44 58.3884 20.64C58.3884 21.84 57.4206 22.8 56.1303 22.8C55.1625 22.8 54.0335 21.92 54.0335 20.64C54.0335 19.44 55.0013 18.4 56.2109 18.4V18.4ZM44.598 17.6C46.1303 17.52 47.4206 18.4 47.4206 18.4L48.7916 16C47.5819 15.12 46.3722 14.64 44.7593 14.64C41.2109 14.64 38.7109 17.52 38.7109 20C38.7109 22.96 41.3722 25.44 44.6787 25.44C46.1303 25.44 47.5819 24.96 48.7109 24.08L47.4206 21.6C47.4206 21.6 46.2109 22.4 44.598 22.4C43.5496 22.4 42.1787 21.52 42.1787 20C42.1787 18.48 43.5496 17.6 44.598 17.6V17.6Z"
                                                                            fill="#1B0A40" />
                                                                        <path
                                                                            d="M10.0806 20L4.83871 23.04L0 31.44L19.9194 20H10.0806Z"
                                                                            fill="#874691" />
                                                                        <path
                                                                            d="M25.1613 11.36L19.9194 14.4L15 22.8L34.9194 11.36H25.1613Z"
                                                                            fill="#DA1844" />
                                                                        <path
                                                                            d="M19.9194 8.4L15 0V40L19.9194 31.6V8.4V8.4Z"
                                                                            fill="#F9B229" />
                                                                        <path
                                                                            d="M15 0L19.9194 8.4L25.1613 11.36H35L15 0Z"
                                                                            fill="#F07F1A" />
                                                                        <path d="M15 17.2V40L19.9194 31.6V25.6L15 17.2Z"
                                                                            fill="#72B22C" />
                                                                        <path
                                                                            d="M25.1613 28.64L19.9194 31.6L15 40L34.9194 28.64H25.1613Z"
                                                                            fill="#00743E" />
                                                                        <path
                                                                            d="M0 8.64001V31.44L4.91935 23.04V16.96L0 8.64001Z"
                                                                            fill="#5F5A94" />
                                                                        <path
                                                                            d="M15 17.2L0 8.64001L4.91935 16.96L25.1613 28.64H35L15 17.2Z"
                                                                            fill="#0D90CD" />
                                                                    </svg>

                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tabs__body">
                                                <div id="payments-tabs" class="tabgroup">
                                                    <div class="tabgroup__body" id="tab4">
                                                        <div class="payments__item">
                                                            <input type="checkbox" id="paymentsTabs-06">
                                                            <label for="paymentsTabs-06">
                                                                <div class="img-convert">
                                                                    <svg width="42" height="41" viewBox="0 0 42 41"
                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <g clip-path="url(#clip0_235_3563)">
                                                                            <path
                                                                                d="M10.9219 6.8538V4.83204C10.9219 2.38685 12.9376 0.39032 15.4001 0.39032H32.1028C33.2308 0.39032 34.2034 0.788504 35.0006 1.58207L40.4061 6.94353C41.2034 7.73429 41.6077 8.69891 41.6077 9.81775V36.1708C41.6077 38.6132 39.5919 40.6125 37.1295 40.6125H15.4029C12.9376 40.6125 10.9247 38.6132 10.9247 36.1708V33.7957"
                                                                                stroke="#B8B8B8"
                                                                                stroke-miterlimit="22.9256"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round" />
                                                                            <path
                                                                                d="M38.5455 9.47562H35.2548C34.1267 9.47562 33.2051 8.56148 33.2051 7.44264V4.17865"
                                                                                stroke="#B8B8B8"
                                                                                stroke-miterlimit="22.9256"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round" />
                                                                            <path
                                                                                d="M10.9217 30.9467C16.7379 30.9467 21.4528 26.2702 21.4528 20.5014C21.4528 14.7326 16.7379 10.0561 10.9217 10.0561C5.10556 10.0561 0.390625 14.7326 0.390625 20.5014C0.390625 26.2702 5.10556 30.9467 10.9217 30.9467Z"
                                                                                stroke="#B8B8B8"
                                                                                stroke-miterlimit="22.9256"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round" />
                                                                            <path
                                                                                d="M13.2087 18.617C12.8242 16.1354 8.73331 16.2391 8.73331 18.6535C8.73331 21.3286 13.3302 19.7976 13.3302 22.3493C13.3302 24.5337 9.50795 24.9515 8.51562 22.6606"
                                                                                stroke="#B8B8B8"
                                                                                stroke-miterlimit="22.9256"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round" />
                                                                            <path d="M11.0996 16.8084V14.9745"
                                                                                stroke="#B8B8B8"
                                                                                stroke-miterlimit="22.9256"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round" />
                                                                            <path d="M11.0996 26.0283V24.1944"
                                                                                stroke="#B8B8B8"
                                                                                stroke-miterlimit="22.9256"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round" />
                                                                            <path d="M25.8008 21.3174H36.6457"
                                                                                stroke="#B8B8B8"
                                                                                stroke-miterlimit="22.9256"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round" />
                                                                            <path d="M25.8008 25.2964H36.6457"
                                                                                stroke="#B8B8B8"
                                                                                stroke-miterlimit="22.9256"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round" />
                                                                            <path d="M21.4648 29.2783H36.6466"
                                                                                stroke="#B8B8B8"
                                                                                stroke-miterlimit="22.9256"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round" />
                                                                        </g>
                                                                        <defs>
                                                                            <clipPath id="clip0_235_3563">
                                                                                <rect width="42" height="41"
                                                                                    fill="white" />
                                                                            </clipPath>
                                                                        </defs>
                                                                    </svg>
                                                                </div>
                                                                <div class="text-convert">
                                                                    <h4 class="title">Оплата на расчётный счёт</h4>
                                                                    <p class="text-10">Юридическим лицам</p>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- <div id="payments-tabs" class="tabgroup">
                                        <div class="tabgroup__body" id="tab4">
                                            <div class="payments__item">
                                                <input type="checkbox" id="paymentsTabs-03">
                                                <label for="paymentsTabs-03">
                                                    <div class="img-convert">
                                                        <svg width="32" height="56" viewBox="0 0 32 56" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M9.68886 39.5789H9.58566C7.83523 39.5789 6.40234 38.1503 6.40234 36.4051V6.5182C6.40234 4.77295 7.83523 3.3443 9.58566 3.3443H24.4702C26.2207 3.3443 27.6536 4.77295 27.6536 6.5182V36.4051C27.6536 38.1503 26.2207 39.5789 24.4702 39.5789H19"
                                                                stroke="#B8B8B8" stroke-miterlimit="22.9256"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M15.2339 33.437H27.6496M6.40234 33.437H9.68489H6.40234Z"
                                                                stroke="#B8B8B8" stroke-miterlimit="22.9256"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M15.3848 36.5079H18.6713" stroke="#B8B8B8"
                                                                stroke-miterlimit="22.9256" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M9.68945 43.0576V33.1283C9.68945 31.6086 10.9358 30.366 12.46 30.366C13.9842 30.366 15.2305 31.6086 15.2305 33.1283V39.8718C15.2305 41.5577 16.0164 43.0061 17.4334 43.9243C19.2632 45.1115 20.3587 47.2604 20.1047 49.5558"
                                                                stroke="#B8B8B8" stroke-miterlimit="22.9256"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M24.4707 39.579C26.6776 41.815 26.9753 45.2184 25.3638 47.767C24.7525 48.7326 24.4707 49.7141 24.4707 50.8578V53.6518"
                                                                stroke="#B8B8B8" stroke-miterlimit="22.9256"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M8.04551 53.5489V52.1835C8.04551 50.6995 7.55729 49.4212 6.56102 48.3131L3.83019 45.2738C2.83789 44.1657 2.3457 42.8874 2.3457 41.4034V27.1446C2.3457 25.6684 2.82995 24.3981 3.81432 23.2939L6.40225 20.3892"
                                                                stroke="#B8B8B8" stroke-miterlimit="22.9256"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M24.1017 5.73859H9.95141C9.33104 5.73859 8.82812 6.29317 8.82812 6.97728V15.846C8.82812 16.5301 9.33104 17.0847 9.95141 17.0847H24.1017C24.7221 17.0847 25.225 16.5301 25.225 15.846V6.97728C25.225 6.29317 24.7221 5.73859 24.1017 5.73859Z"
                                                                stroke="#B8B8B8" stroke-miterlimit="22.9256"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M8.82812 8.8927H25.225" stroke="#B8B8B8"
                                                                stroke-miterlimit="22.9256" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M19.8868 15.6362C20.9106 15.6362 21.7405 14.8088 21.7405 13.7881C21.7405 12.7674 20.9106 11.9399 19.8868 11.9399C18.8631 11.9399 18.0332 12.7674 18.0332 13.7881C18.0332 14.8088 18.8631 15.6362 19.8868 15.6362Z"
                                                                stroke="#B8B8B8" stroke-miterlimit="22.9256"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M20.8984 12.2407C22.1091 11.4532 23.7602 12.308 23.7602 13.7881C23.7602 15.2682 22.1091 16.123 20.8984 15.3355"
                                                                stroke="#B8B8B8" stroke-miterlimit="22.9256"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>

                                                    </div>
                                                    <div class="text-convert">
                                                        <h4 class="title">Быстрая оплата - online</h4>
                                                        <p class="text-10">Оплата банковской картой на сайте</p>
                                                    </div>
                                                </label>
                                            </div>
                                            <div class="payments__item">
                                                <input type="checkbox" id="paymentsTabs-04">
                                                <label for="paymentsTabs-04">
                                                    <div class="img-convert">
                                                        <svg width="41" height="42" viewBox="0 0 41 42" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M9.94979 7.2113H5.46972C3.50478 7.2113 1.89844 8.75681 1.89844 10.6444C1.89844 12.532 3.50478 14.0775 5.46972 14.0775H33.2024V10.9622C33.2024 8.89753 31.4978 7.2113 29.4052 7.2113H27.9732"
                                                                stroke="#00AA2E" stroke-miterlimit="22.9256"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M1.89844 10.6808V35.8747C1.89844 37.8594 3.53671 39.4801 5.54832 39.4801H33.3523C35.3614 39.4801 37.0021 37.8618 37.0021 35.8747V32.0025M37.0021 21.3974V17.8236C37.0021 15.7589 35.2976 14.0726 33.2049 14.0726H26.9048"
                                                                stroke="#00AA2E" stroke-miterlimit="22.9256"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M39.16 21.3998H31.3199C28.3675 21.3998 25.9531 23.7848 25.9531 26.7011C25.9531 29.6175 28.3675 32.0024 31.3199 32.0024H39.16V21.3974V21.3998Z"
                                                                stroke="#00AA2E" stroke-miterlimit="22.9256"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M30.6148 28.8775C31.8302 28.8775 32.8155 27.9042 32.8155 26.7036C32.8155 25.503 31.8302 24.5297 30.6148 24.5297C29.3994 24.5297 28.4141 25.503 28.4141 26.7036C28.4141 27.9042 29.3994 28.8775 30.6148 28.8775Z"
                                                                stroke="#00AA2E" stroke-miterlimit="22.9256"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M8.21094 11.5688L17.3577 2.53355C18.2444 1.65768 19.6911 1.65768 20.5778 2.53355L29.7246 11.5688"
                                                                stroke="#00AA2E" stroke-miterlimit="22.9256"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path
                                                                d="M13.8008 6.04431C16.8415 8.37349 21.0932 8.37349 24.1339 6.04431"
                                                                stroke="#00AA2E" stroke-miterlimit="22.9256"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M18.9297 12.1025L20.9388 10.0427" stroke="#00AA2E"
                                                                stroke-miterlimit="22.9256" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                        </svg>

                                                    </div>
                                                    <div class="text-convert">
                                                        <h4 class="title">Перевод по номеру счёта</h4>
                                                        <p class="text-10">Оплата с кошельков</p>
                                                    </div>
                                                </label>
                                            </div>
                                            <div class="payments__item">
                                                <input type="checkbox" id="paymentsTabs-05">
                                                <label for="paymentsTabs-05">
                                                    <div class="img-convert">
                                                        <svg width="75" height="40" viewBox="0 0 75 40" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M63.8722 14.88V25.2H67.5013V17.92H70.969V25.2H74.5174V14.88H63.8722ZM57.098 14.32H60.4045L62.098 11.28H56.7755C52.9045 11.36 50.3238 14.64 50.3238 18.72C50.3238 23.52 53.0658 25.44 56.3722 25.44C59.7593 25.44 62.2593 23.28 62.1787 20.32C62.098 18 60.1625 15.76 57.5819 15.76C56.1303 15.76 54.7593 16.24 53.8722 17.12C53.9529 15.44 55.4045 14.32 57.098 14.32ZM56.2109 18.4C57.5013 18.4 58.3884 19.44 58.3884 20.64C58.3884 21.84 57.4206 22.8 56.1303 22.8C55.1625 22.8 54.0335 21.92 54.0335 20.64C54.0335 19.44 55.0013 18.4 56.2109 18.4V18.4ZM44.598 17.6C46.1303 17.52 47.4206 18.4 47.4206 18.4L48.7916 16C47.5819 15.12 46.3722 14.64 44.7593 14.64C41.2109 14.64 38.7109 17.52 38.7109 20C38.7109 22.96 41.3722 25.44 44.6787 25.44C46.1303 25.44 47.5819 24.96 48.7109 24.08L47.4206 21.6C47.4206 21.6 46.2109 22.4 44.598 22.4C43.5496 22.4 42.1787 21.52 42.1787 20C42.1787 18.48 43.5496 17.6 44.598 17.6V17.6Z"
                                                                fill="#1B0A40" />
                                                            <path
                                                                d="M10.0806 20L4.83871 23.04L0 31.44L19.9194 20H10.0806Z"
                                                                fill="#874691" />
                                                            <path
                                                                d="M25.1613 11.36L19.9194 14.4L15 22.8L34.9194 11.36H25.1613Z"
                                                                fill="#DA1844" />
                                                            <path d="M19.9194 8.4L15 0V40L19.9194 31.6V8.4V8.4Z"
                                                                fill="#F9B229" />
                                                            <path d="M15 0L19.9194 8.4L25.1613 11.36H35L15 0Z"
                                                                fill="#F07F1A" />
                                                            <path d="M15 17.2V40L19.9194 31.6V25.6L15 17.2Z"
                                                                fill="#72B22C" />
                                                            <path
                                                                d="M25.1613 28.64L19.9194 31.6L15 40L34.9194 28.64H25.1613Z"
                                                                fill="#00743E" />
                                                            <path d="M0 8.64001V31.44L4.91935 23.04V16.96L0 8.64001Z"
                                                                fill="#5F5A94" />
                                                            <path
                                                                d="M15 17.2L0 8.64001L4.91935 16.96L25.1613 28.64H35L15 17.2Z"
                                                                fill="#0D90CD" />
                                                        </svg>

                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div> -->
                                </div>
                            </div>`)
            tabs()
        } else if (e.target.classList.contains("tabs__title") && e.target.id == "payment") {
            const delivery__container = document.querySelector(".purchase-body__box-delivery")
            delivery__container.nextElementSibling.remove()
            const contacts = document.querySelector(".purchase-body__box-data");
            contacts.innerHTML = '';
            contacts.insertAdjacentHTML('afterbegin', `<div class="heading-body">
                                    <h2 class="heading">Контактные данные <span class="green">*</span></h2>
                                </div>
                                <p class="description-text">Обозначьте количество бонусов, которые Вы хотите списать при
                                    оформлении заказа</p>
                                <div class="purchase__ucontacts">
                                    <form action="#">
                                        <div class="purchase__ucontacts-row">
                                            <div class="purchase__ucontacts-col3">
                                                <span class="title">Фамилия<span class="green">*</span></span>
                                                <input type="text">
                                            </div>
                                            <div class="purchase__ucontacts-col3">
                                                <span class="title">Имя<span class="green">*</span></span>
                                                <input type="text">
                                            </div>
                                        </div>
                                        <div class="purchase__ucontacts-row">
                                            <div class="purchase__ucontacts-col2">
                                                <span class="title">Телефон<span class="green">*</span></span>
                                                <input type="phone">
                                            </div>
                                            <div class="purchase__ucontacts-col2">
                                                <span class="title">Email<span class="green">*</span></span>
                                                <input type="Email">
                                            </div>
                                            <div class="purchase__ucontacts-col checkmark-push-body">
                                                <input type="checkbox" id="checkmark-push-sms">
                                                <label for="checkmark-push-sms" class="checkmark-push">Включить
                                                    СМС-уведомления о заказе</label>
                                            </div>
                                        </div>
                                        <div class="purchase__ucontacts-row">
                                            <div class="purchase__ucontacts-col6">
                                                <span class="title">Адрес<span class="green">*</span></span>
                                                <input type="text">
                                            </div>
                                            <div class="purchase__ucontacts-col1">
                                                <span class="title">Индекс<span class="green">*</span></span>
                                                <input type="text">
                                            </div>
                                        </div>
                                        <div class="heading-body">
                                            <h2 class="heading">Комментарии к заказу</h2>
                                        </div>
                                        <p class="text-16">
                                            Что ещё нам необходимо учесть при доставке заказа?
                                        </p>
                                        <div class="purchase__ucontacts-row">
                                            <div class="purchase__ucontacts-col">
                                                <textarea name=""></textarea>
                                            </div>
                                        </div>
                                        <div class="form-description"><span class="green">*</span> Обязательное поле
                                        </div>
                                    </form>
                                </div>`)
        }
        else if (e.target.classList.contains("tabs__title") && e.target.id == "entity") {
            const contacts = document.querySelector(".purchase-body__box-data");
            contacts.innerHTML = '';
            contacts.insertAdjacentHTML('afterbegin', `
                                <div class="heading-body">
                                    <h2 class="heading">Контактные данные <span class="green">*</span></h2>
                                </div>
                                <p class="description-text">Обозначьте количество бонусов, которые Вы хотите списать при
                                    оформлении заказа</p>
                                <div class="purchase__ucontacts">
                                    <form action="#" id="purchase5">
                                        <div class="purchase__ucontacts-row">
                                            <div class="purchase__ucontacts-col3">
                                                <span class="title">Фамилия<span class="green">*</span></span>
                                                <input type="text">
                                            </div>
                                            <div class="purchase__ucontacts-col3">
                                                <span class="title">Имя<span class="green">*</span></span>
                                                <input type="text">
                                            </div>
                                            <div class="purchase__ucontacts-col3">
                                                <span class="title">Отчество<span class="green">*</span></span>
                                                <input type="text">
                                            </div>
                                        </div>
                                        <div class="purchase__ucontacts-row">
                                            <div class="purchase__ucontacts-col2">
                                                <span class="title">Телефон<span class="green">*</span></span>
                                                <input type="phone">
                                            </div>
                                            <div class="purchase__ucontacts-col2">
                                                <span class="title">Email<span class="green">*</span></span>
                                                <input type="Email">
                                            </div>
                                            <div class="purchase__ucontacts-col checkmark-push-body">
                                                <input type="checkbox" id="checkmark-push-sms-yuridik">
                                                <label for="checkmark-push-sms-yuridik" class="checkmark-push">Включить
                                                    СМС-уведомления о
                                                    заказе</label>
                                            </div>
                                        </div>
                                        <div class="purchase__ucontacts-row">
                                            <div class="purchase__ucontacts-col6">
                                                <span class="title">Адрес<span class="green">*</span></span>
                                                <input type="text">
                                            </div>
                                            <div class="purchase__ucontacts-col3">
                                                <span class="title">Индекс<span class="green">*</span></span>
                                                <input type="text">
                                            </div>
                                        </div>
                                        <div class="purchase__ucontacts-row">
                                            <div class="purchase__ucontacts-col6">
                                                <span class="title">Наименование организации покупателя<span
                                                        class="green">*</span></span>
                                                <input type="text">
                                            </div>
                                        </div>
                                        <div class="purchase__ucontacts-row">
                                            <div class="purchase__ucontacts-col2">
                                                <span class="title">ИНН организации покупателя<span
                                                        class="green">*</span></span>
                                                <input type="text">
                                            </div>
                                            <div class="purchase__ucontacts-col2">
                                                <span class="title">КПП организации покупателя<span
                                                        class="green">*</span></span>
                                                <input type="text">
                                            </div>
                                            <div class="purchase__ucontacts-col checkmark-push-body">
                                                <input type="checkbox" id="checkmark-push-sms-yuridik">
                                                <label for="checkmark-push-sms-yuridik" class="checkmark-push">Включить
                                                    СМС-уведомления о
                                                    заказе</label>
                                            </div>
                                        </div>
                                        <div class="purchase__ucontacts-row">
                                            <div class="purchase__ucontacts-col6">
                                                <span class="title">Юридический адрес организации покупателя<span
                                                        class="green">*</span></span>
                                                <input type="text">
                                            </div>
                                            <div class="purchase__ucontacts-col3">
                                                <span class="title">ИИН<span class="green">*</span></span>
                                                <input type="text">
                                                <p class="input-description text-14">Обязательно для резидентов
                                                    Казахстана</p>
                                            </div>
                                        </div>
                                        <div class="heading-body">
                                            <h2 class="heading">Комментарии к заказу</h2>
                                        </div>
                                        <p class="text-16">
                                            Что ещё нам необходимо учесть при доставке заказа?
                                        </p>
                                        <div class="purchase__ucontacts-row">
                                            <div class="purchase__ucontacts-col">
                                                <textarea name=""></textarea>
                                            </div>
                                        </div>
                                        <div class="form-description"><span class="green">*</span> Обязательное поле
                                        </div>
                                    </form>
                                </div>`)
        } else if (e.target.classList.contains("tabs__title") && e.target.id == "individual") {
            const contacts = document.querySelector(".purchase-body__box-data");
            contacts.innerHTML = '';
            contacts.insertAdjacentHTML('afterbegin', `<div class="heading-body">
                                    <h2 class="heading">Контактные данные <span class="green">*</span></h2>
                                </div>
                                <p class="description-text">Обозначьте количество бонусов, которые Вы хотите списать при
                                    оформлении заказа</p>
                                <div class="purchase__ucontacts">
                                    <form action="#">
                                        <div class="purchase__ucontacts-row">
                                            <div class="purchase__ucontacts-col3">
                                                <span class="title">Фамилия<span class="green">*</span></span>
                                                <input type="text">
                                            </div>
                                            <div class="purchase__ucontacts-col3">
                                                <span class="title">Имя<span class="green">*</span></span>
                                                <input type="text">
                                            </div>
                                        </div>
                                        <div class="purchase__ucontacts-row">
                                            <div class="purchase__ucontacts-col2">
                                                <span class="title">Телефон<span class="green">*</span></span>
                                                <input type="phone">
                                            </div>
                                            <div class="purchase__ucontacts-col2">
                                                <span class="title">Email<span class="green">*</span></span>
                                                <input type="Email">
                                            </div>
                                            <div class="purchase__ucontacts-col checkmark-push-body">
                                                <input type="checkbox" id="checkmark-push-sms">
                                                <label for="checkmark-push-sms" class="checkmark-push">Включить
                                                    СМС-уведомления о заказе</label>
                                            </div>
                                        </div>
                                        <div class="purchase__ucontacts-row">
                                            <div class="purchase__ucontacts-col6">
                                                <span class="title">Адрес<span class="green">*</span></span>
                                                <input type="text">
                                            </div>
                                            <div class="purchase__ucontacts-col1">
                                                <span class="title">Индекс<span class="green">*</span></span>
                                                <input type="text">
                                            </div>
                                        </div>
                                        <div class="heading-body">
                                            <h2 class="heading">Комментарии к заказу</h2>
                                        </div>
                                        <p class="text-16">
                                            Что ещё нам необходимо учесть при доставке заказа?
                                        </p>
                                        <div class="purchase__ucontacts-row">
                                            <div class="purchase__ucontacts-col">
                                                <textarea name=""></textarea>
                                            </div>
                                        </div>
                                        <div class="form-description"><span class="green">*</span> Обязательное поле
                                        </div>
                                    </form>
                                </div>`)
        } else if (e.target.classList.contains("select__option")) {
            const region__select = document.querySelector(".select")
            region__select.classList.add("select__item-choosen")
        }
    })
    const region__select = document.querySelector(".select");
    const region__select__body = document.querySelector('.select__body')
    region__select__body.insertAdjacentHTML('afterbegin', `<span class="pseudo__placeholder">Пермь, Пермский край, Россия</span>`)
    if (region__select) {
        if (!region__select.classList.contains("select__item-choosen")) {
            const region__input = document.querySelector(".select__input")
            region__input.addEventListener('input', function () {
                const pseudo__placeholder = document.querySelector(".pseudo__placeholder")
                if (pseudo__placeholder) {
                    pseudo__placeholder.remove()
                }
                if (region__input.value.length == 0) {
                    region__select__body.insertAdjacentHTML('afterbegin', `<span class="pseudo__placeholder">Пермь, Пермский край, Россия</span>`)
                }
            })
            region__input.placeholder = ''
        }
    }
}