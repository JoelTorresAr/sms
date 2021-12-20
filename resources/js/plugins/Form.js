import Vue from 'vue'
import BaseForm from 'vform'
import axios from 'axios'

class Form extends BaseForm {
    constructor(data = {}) {
        super(data)
    }

    startProcessing() {
        super.startProcessing()
        this.progress = 0
    }

    finishProcessing() {
        super.finishProcessing()
        this.progress = null
    }

    failProcessing() {
        this.progress = null
    }

    clear() {
        super.clear()
        this.progress = null
    }
    innerAssignForm(needle) {
        var that = Object.assign({},this.data());
        var clone = Object.assign({}, needle);
        that.inner_assign(clone);
        super.fill(that);
    }

    async req(url, action, config) {
        return this.submit('post', url, config, action);
    }

    async submit(method, url, config = {}, action = null) {

        const newConfig = config

        const data = method === 'get'
            ? { params: this.data }
            : this.data();

        let newUrl = url;
        if (data.id != null && (action === 'edit' || action === 'delete')) {
            newUrl += `/${data.id}`;
            data._method = action === 'edit' ? 'PUT' : 'DELETE';
        }

        return new Promise((resolve, reject) => {
            this.startProcessing();

            window.axios.request({
                url: this.route(newUrl), method, data, ...newConfig,
            })
                .then(response => {
                    this.finishProcessing();
                    resolve(response);
                })
                .catch(error => {
                    this.busy = false;
                    this.failProcessing()
                    if (error.response && error.response.status === 422) {
                        this.errors.set(this.extractErrors(error.response));
                    }
                    reject(error);
                });
        });
    }
}

Form.ignore.push('progress');
window.Form = Form;

export default Form;
