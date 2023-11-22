import swal from 'sweetalert';

export default {
    data() {
        return {
            countryCodeTxt: "IND (91)",
            warnClrTxt: "Are you sure want to clear the record?",
            warnDltTxt: "Are you sure want to %s",
            warnReloadTxt: "Are you sure want to replace the existing data?",
            FinmonthArraydata: [{
                value: 4,
                text: 'APR'
            }, {
                value: 5,
                text: 'MAY'
            }, {
                value: 6,
                text: 'JUN'
            }, {
                value: 7,
                text: 'JUL'
            }, {
                value: 8,
                text: 'AUG'
            }, {
                value: 9,
                text: 'SEP'
            }, {
                value: 10,
                text: 'OCT'
            }, {
                value: 11,
                text: 'NOV'
            }, {
                value: 12,
                text: 'DEC'
            }, {
                value: 1,
                text: 'JAN'
            }, {
                value: 2,
                text: 'FEB'
            }, {
                value: 3,
                text: 'MAR'
            }],
            NormalmonthArraydata: [
                {
                    value: 1,
                    text: 'JAN'
                }, {
                    value: 2,
                    text: 'FEB'
                }, {
                    value: 3,
                    text: 'MAR'
                },{
                    value: 4,
                    text: 'APR'
                }, {
                    value: 5,
                    text: 'MAY'
                }, {
                    value: 6,
                    text: 'JUN'
                }, {
                    value: 7,
                    text: 'JUL'
                }, {
                    value: 8,
                    text: 'AUG'
                }, {
                    value: 9,
                    text: 'SEP'
                }, {
                    value: 10,
                    text: 'OCT'
                }, {
                    value: 11,
                    text: 'NOV'
                }, {
                    value: 12,
                    text: 'DEC'
                }],
                QuarterArraydata : [{
                    value: 4,
                    text: 'Q1 (APR - JUN)',
                },
                {
                    value: 7,
                    text: 'Q2 (JUL - SEP)'
                },
                {
                    value: 10,
                    text: 'Q3 (OCT - DEC)'
                },
                {
                    value: 1,
                    text: 'Q4 (JAN - MAR)'
                }
            ]
        }
    },
    methods: {
        warnAlert(title, txt, type = '') {
            let btn = "";
            if (type == 'custom' || type == "success" || type == "failure" || type == "warning")
                btn = "Ok"
            else if (type == 'confirm')
                btn = ["No", "Yes"];
            else
                btn = ["Cancel", "Ok"];
            let msg = '';
            let txtMsg = '';
            let addClass = '';
            if (title == 'warnDltTxt') {
                if (type == '' || type == 'confirm')
                    msg = this.warnDltTxt.replace('%s', "delete the record?");
                msg = this.warnDltTxt.replace('%s', type);
            }
            else {
                msg = title;
                txtMsg = txt;
            }
            if (type == "success") {
                addClass = "saveSuccess";
            }
            else if (type == "failure") {
                addClass = "unSuccess";
            }
            else if (type == "warning") {
                addClass = "warningInfo";
            }
            else if (type == 'confirm' && title != 'warnDltTxt') {
                msg = title;
                txtMsg = txt;
            }
            return swal({
                title: msg,
                text: txtMsg,
                buttons: btn,
                dangerMode: true,
                className: addClass,
                closeOnClickOutside: false
            });
        },
        getServerStatus() {
            return this.service.get(this.$getServerStatus).then(response => {
                let serverStat = response.bodyText;
                if (serverStat != 'serverUp')
                    this.$router.push({ path: '/ServerDown' });
                return serverStat;
            })
        },
        changeDateFormat(cdate) {
            var date = new Date(cdate);
            return ((date.getFullYear())) + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + (date.getDate())).slice(-2);
        },
        getenteredpassword() {
            this.errors = [];
            if (!this.IsValidPassword(this.newPassword)) {
                this.errors['passwordError'] = 'Password does not meet the password policy.';
            }
        },
        getenteredcnfpassword() {
            this.errors = [];
            if (!this.IsValidPassword(this.newPassword)) {
                this.errors['passwordError'] = 'Password does not meet the password policy.';
            }
            if (this.newPassword != this.confirmPassword) {
                this.errors['confirmPasswordError'] = 'New Password and Confirm Password does not match.';
            }
        },
        IsDateofBirth(modelVal) {
            var dateVal = modelVal.split("-");
            var toDay = new Date();
            var age = toDay.getFullYear() - dateVal[0];

            if (age < 18 || age > 100) {
                return false
            }
            else {
                return true;
            }
        },

        IsAgeMinor(modelVal) {
            var today = new Date();
            var birthDate = new Date(modelVal);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            if (age < 18) {
                return false
            } else return true;
        },

        IsAgeSenior(modelVal) {
            var today = new Date();
            var birthDate = new Date(modelVal);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            if (age > 100) {
                return false
            } else return true;
        },

        passwordPolicy() {
            return '<div id="passwordPolicy"> <b-card class="px-2"> <h6 class="text-left">Password Policy</h6> <ul class="m-0 pl-4"> <li><span>Minimum of 8 characters in length</span></li> <li><span>At least one upper case letter</span></li> <li><span>At least one lower case letter</span></li> <li><span>At least one number</span></li> <li><span>At least one special characters (!@#%^&*())</span></li> </ul> </b-card> </div>';
        },

        priceFormat(value) {
            if (value != null) {
                value = value.toString().replace(/[^0-9.]/g, '')
                var result = value.toString().split('.')
                var lastThree = result[0].substring(result[0].length - 3)
                var otherNumbers = result[0].substring(0, result[0].length - 3)
                if (otherNumbers != '') lastThree = ',' + lastThree
                value = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree + (result[1] ? ('.' + result[1]) : '')
                return value
            }
            if (value == null) {
                return '0'
            }
        },
        checkNULLUndefined(value) {
            return (typeof value !== 'undefined' && value > 0) ? value : 0;
        },
        financeYear_select(yearNO) {
            var today = new Date();
            var cur_yr = today.getFullYear();
            var mm = today.getMonth() + 1;
            var fin_yr = (mm < 4) ? cur_yr  : cur_yr + 1;
            let finyearSelect = [];
            for (var i = yearNO; i > 0; i--) {
                var year = (fin_yr + 1 - i).toString().substr(-2);
                var obj = {
                    text: fin_yr - i + '-' + (year),
                    yearText: fin_yr - i,
                    value: fin_yr - i
                }
                finyearSelect.push(obj)
            }
            return finyearSelect;
        },
        XLExport(tableId, filename = '') {
            var tab_text = "<table border='2px'><tr>";
            var j = 0;
            let tab = document.getElementById(tableId);
            for (j = 0; j < tab.rows.length; j++) {
                tab_text = tab_text + tab.rows[j].innerHTML + "</tr>";
            }
            filename = filename ? filename + '.xls' : 'excel_data.xls';
            tab_text = tab_text + "</table>";

            var a = document.createElement('a');
            var data_type = 'data:application/vnd.ms-excel';
            "data:text/csv;charset=utf-8,"
            a.href = data_type + ', ' + encodeURIComponent(tab_text);
            a.download = filename;
            a.click();
        }
    }
}
