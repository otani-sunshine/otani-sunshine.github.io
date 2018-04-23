/**
 * Created by Administrator on 2017/7/11.
 */


/*-----51-产品持仓列表-------*/
// const formList1 = [
//     {
//         dataList:'6547'
//     },
//     {
//         dataList:'6547'
//     },
//     {
//         dataList:'6547'
//     },
//     {
//         dataList:'6547'
//     },
//     {
//         dataList:'6547'
//     },
// ];
// const formList2 = [
//     {
//         dataList:'123',
//         dataList2:'123'
//     },
//     {
//         dataList:'123',
//         dataList2:'123'
//     },
//     {
//         dataList:'123',
//         dataList2:'123'
//     },
//     {
//         dataList:'123',
//         dataList2:'123'
//     },
//     {
//         dataList:'123',
//         dataList2:'123'
//     },
// ]
// const formContent = new Vue({
//     el : '.form_list',
//     data : {
//         formList1 : formList1,
//         formList2 : formList2
//     }
// })






/*-------------------------------查询条件-控件---------------------------------*/


var nodeParam =[
    {
        wides:[
            {
                wide:'1',
                wideName:'基本'
            },
            {
                wide:'2',
                wideName:'维度'
            },
            {
                wide:'3',
                wideName:'指标'
            }
        ]
    },
    {
        title: '操作渠道',
        type: 'select-one',//下拉框单选:select-one,下拉框二级：select-two，文字加一个输入框：input-one，一个输入框：input-two，时间选择框：input-time，下拉框多选:select-one-all,持仓数量范围:input-five,
        names:"['selectOne']",
        wide:'1',
        imgUrl:'../images/log_behavior_img1-1.png',
        items: "[{id: '1',name: 'app'},{id: '2',name: 'pc'},{id: '3',name: 'other'}]",
        word: '',//文字加一个输入框：input-one中的文字
        placeholder: '',//输入框提示内容(只有输入框有)
        text:'',//默认为空
        secondText: '',//默认为空
        childNodeList:"['']"//子组件
    },
    {
        title: '操作类型/行为',
        type: 'select-two',
        names:"['selectTwo','secondSelectTwo']",
        wide:'1',
        imgUrl:'../images/log_behavior_img1-2.png',
        // items: "[{pid: '1',id: '1',name: '注册'},{pid: '1',id: '2',name: '免费开户'},{pid: '1',id: '3',name: '登录'},{pid: '4',id: '4',name: '出入金'},{pid: '4',id: '5',name: '出金'},{pid: '4',id: '6',name: '入金'}]",
        items: "[{pid: '1',id: '1',name: '注册',twoItems:[{pid: '1',id: '2',name: '免费开户'},{pid: '1',id: '3',name: '登录'}]},{pid: '4',id: '4',name: '出入金',twoItems:[{pid: '4',id: '5',name: '出金'},{pid: '4',id: '6',name: '查询用户是否有配售的产品、查询单个品种的配售列表'},{pid: '4',id: '7',name: '入金'}]}]",
        word: '',
        placeholder: '',
        text:'',
        secondText: '',
        childNodeList:"['']"
    },
    {
        title: '操作次数阀值',
        type: 'input-one',
        names:"['inputOne']",
        wide:'1',
        imgUrl:'../images/log_behavior_img1-3.png',
        items: "['']",
        word: '小于',
        placeholder: '请输入数值',
        text:'',
        secondText: '',
        childNodeList:"['']"
    },
    {
        title: '操作IP地址',
        type: 'input-two',
        names:"['inputTwo']",
        wide:'2',
        imgUrl:'../images/log_behavior_img3-12.png',
        items: "['']",
        word: '',
        placeholder: '请输入用户操作时的IP地址/MAC地址',
        text:'',
        secondText: '',
        childNodeList:"['']"
    },
    {
        title: '查询时间',
        type: 'input-time',
        names:"['inputTime','secondInputTime']",
        wide:'2',
        imgUrl:'../images/log_behavior_img1-4.png',
        items: "['']",
        word: '',
        placeholder: '',
        text:'',
        secondText: '',
        childNodeList:"['']"
    },
    {
        title: '个人会员年龄',
        type: 'input-double',
        names:"['inputDouble','secondInputDouble']",
        wide:'2',
        imgUrl:'../images/log_behavior_img3-8.png',
        items: "['']",
        word: '',
        placeholder: '',
        text:'',
        secondText: '',
        childNodeList:"['']"
    },
    {
        title: '会员类型',
        type: 'select-one-all',
        names:"['selectOneAll']",
        wide:'3',
        imgUrl:'../images/log_behavior_img3-1.png',
        items: "[{id: '1',name: '普通会员'},{id: '2',name: '经纪会员'},{id: '3',name: '委托发售方'},{id: '4',name: '市场公司'},{id: '5',name: '运营公司'},{id: '6',name: '交易所'}]",
        word: '',
        placeholder: '',
        text:'',
        secondText: '',
        childNodeList:"['']"
    },
    {
        title: '持仓数量范围',
        type: 'input-five',
        names:"['inputFive']",
        wide:'1',
        imgUrl:'../images/log_behavior_img4-1.png',
        items: "['']",
        word: '',
        placeholder: '',
        text:'',
        secondText: '',
        childNodeList:"[{title: '交易品种',type: 'input-one',names:['issueCode'],wide:'',imgUrl:'',items: [],word: '',placeholder: '请输入品种名称/交易代码',text:'',secondText: '',},{title: '持仓数量',type: 'input-double',names:['numberFrom','numberTo'],wide:'',imgUrl:'',items: [],word: '',placeholder: '请输入最低值,请输入最高值',text:'',secondText: '',childNodeLit:[]},{title: '持仓时间',type: 'input-time',names:['timeFrom','timeTo'],wide:'',imgUrl:'',items: [],word: '',placeholder: '',text:'',secondText: '',childNodeLit:[]}]"
    }
];

/*1*/
Vue.component('select-one', {
    template: '#select-one',
    props: {
        value:{
            type: Object,
            required: false
        },
        node:{
            type: Object,
            required: false
        }
    },
    data: function() {
         return {
            outParam:this.value
         };
    },
    methods:{
        setValue:function(name,value){
            this.$set(this.outParam,name,value);
        },
        getValue:function(name){
            return this.outParam[name];
        },
        show:function(event){
            var obj = event.currentTarget;
            var showDiv = $(obj).next('.log_behavior_show');
            if(showDiv.is(':hidden')){
                showDiv.slideDown(200);
                $(obj).parent('li').siblings('li').children('.log_behavior_show').slideUp(100);
            }else{
                showDiv.slideUp(100);
            }
            showDiv.children('p').click(function(){
                showDiv.slideUp(100);
            });
        },
        isShow:function(node){
            var str='';
            for (var i = 0; i < node.names.length; i++) {
                 if(node.type=='input-five'){
                    var paramList=this.outParam[node.names[i]];
                    for (var j = 0; j < paramList.length; j++) {
                        for(var n=0;n<node.childNodeList.length;n++){
                            for(var k=0;k<node.childNodeList[n].names.length;k++){
                                str += paramList[j][node.childNodeList[n].names[k]];
                            }
                        }
                    }
                 }else{
                     str+=this.outParam[node.names[i]];
                 }
            }
            if(str == ' '){
                return false;
            }
            return str;
        }
    },
    watch:{
        outParam:{ 
            handler: function () {
                for(var i=0;i<this.node.items.length;i++){
                    if(this.node.items[i].id == this.outParam[this.node.names[0]]){
                        this.node.text = this.node.items[i].name;
                    }
                }
            },
            deep:true
        }
    }
});
/*2*/
Vue.component('select-two',{
    template:'#select-two',
    props: {
        value:{
            type: Object,
            required: false,
        },
        node:{
            type: Object,
            required: false,
        }
    },
    data: function(){
        return {
            outParam: this.value,
        };
    },
    methods: {
        setValue:function(name,value){
              this.$set(this.outParam,name,value);
        },
        getValue:function(name){
            return this.outParam[name];
        },
        arrryPid:function(){
            var arrPid = [],twoItems = [];
            for(var i=0;i<this.node.items.length;i++){
                if(this.node.items[i].pid == this.node.items[i].id){
                    this.node.items[i].twoItems = [];
                    arrPid.push(this.node.items[i]);
                }
            }
            for(var j=0;j<arrPid.length;j++){
                for(var n=0;n<this.node.items.length;n++){
                    if(this.node.items[n].pid != this.node.items[n].id && arrPid[j].pid == this.node.items[n].pid){
                        arrPid[j].twoItems.push(this.node.items[n]);
                    }
                }
            }
            return arrPid;
        },
        showTwo:function(event){
            var obj = event.currentTarget;
            var showDiv = $(obj).next('.log_behavior_show');
            if(showDiv.is(':hidden')){
                showDiv.slideDown(200);
                $(obj).parent('li').siblings('li').children('.log_behavior_show').slideUp(100);
            }else{
                showDiv.slideUp(100);
            }
            showDiv.find('.log_tier_child').find('li').click(function(){
                $(this).parents('.log_tier_child').hide();
                showDiv.slideUp(100);
            });
        },
        showTwoOne:function(event){
            var obj = event.currentTarget;
            $(obj).next('.log_tier_child').show().parent('li').siblings('li').children('.log_tier_child').hide();
        },
        isShow:function(node){
            var str='';
            for (var i = 0; i < node.names.length; i++) {
                 if(node.type=='input-five'){
                    var paramList=this.outParam[node.names[i]];
                    for (var j = 0; j < paramList.length; j++) {
                        for(var n=0;n<node.childNodeList.length;n++){
                            for(var k=0;k<node.childNodeList[n].names.length;k++){
                                str += paramList[j][node.childNodeList[n].names[k]];
                            }
                        }
                    }
                 }else{
                     str+=this.outParam[node.names[i]];
                 }
            }
            if(str == ' '){
                return false;
            }
            return str;
        }
    },
    watch:{
        outParam:{ 
            handler: function () {
                for(var i=0;i<this.node.items.length;i++){
                    if(this.node.items[i].id == this.outParam[this.node.names[0]]){
                        this.node.text = this.node.items[i].name;
                    }
                    for(var j=0;j<this.node.items[i].twoItems.length;j++){
                        if(this.node.items[i].twoItems[j].id == this.outParam[this.node.names[1]]){
                            this.node.secondText = this.node.items[i].twoItems[j].name;
                        }
                    }
                }
            },
            deep:true
        }
    }
});
/*3*/
Vue.component('input-one', {
    template: '#input-one',
    props: {
        value:{
            type: Object,
            required: false
        },
        node:{
            type: Object,
            required: false
        },
    },
    data: function() {
         return {
            outParam:this.value
         };
    },
    methods:{
        setValue:function(name,value){
            this.$set(this.outParam,name,value);
        },
        getValue:function(name){
            return this.outParam[name];
        },
        showThree:function(event){
            var obj = event.currentTarget;
            var showDiv = $(obj).next('.log_behavior_show');
            if(showDiv.is(':hidden')){
                showDiv.slideDown(200);
                $(obj).parent('li').siblings('li').children('.log_behavior_show').slideUp(100);
            }else{
                showDiv.slideUp(100);
            }
            showDiv.children('.log_behavior_twoipt_tol').children('a').click(function(){
                showDiv.slideUp(100);
            });
        },
        isShow:function(node){
            var str='';
            for (var i = 0; i < node.names.length; i++) {
                 if(node.type=='input-five'){
                    var paramList=this.outParam[node.names[i]];
                    for (var j = 0; j < paramList.length; j++) {
                        for(var n=0;n<node.childNodeList.length;n++){
                            for(var k=0;k<node.childNodeList[n].names.length;k++){
                                str += paramList[j][node.childNodeList[n].names[k]];
                            }
                        }
                    }
                 }else{
                     str+=this.outParam[node.names[i]];
                 }
            }
            if(str == ' '){
                return false;
            }
            return str;
        }
    },
    watch:{
        outParam:{
            handler:function(){
                this.node.text = this.outParam[this.node.names[0]];
            },
            deep:true
        }
    }
});
/*4*/
Vue.component('input-two', {
    template: '#input-two',
    props: {
        value:{
            type: Object,
            required: false
        },
        node:{
            type: Object,
            required: false
        },
    },
    data: function() {
         return {
            outParam:this.value
         };
    },
    methods:{
        setValue:function(name,value){
            this.$set(this.outParam,name,value);
        },
        getValue:function(name){
            return this.outParam[name];
        },
        showFive:function(event){
            var obj = event.currentTarget;
            var showDiv = $(obj).next('.log_behavior_show');
            if(showDiv.is(':hidden')){
                showDiv.slideDown(200);
                $(obj).parent('li').siblings('li').children('.log_behavior_show').slideUp(100);
            }else{
                showDiv.slideUp(100);
            }
            showDiv.find('.log_behavior_oneipt_tol').children('a').click(function(){
                showDiv.slideUp(100);
            });
        },
        isShow:function(node){
            var str='';
            for (var i = 0; i < node.names.length; i++) {
                 if(node.type=='input-five'){
                    var paramList=this.outParam[node.names[i]];
                    for (var j = 0; j < paramList.length; j++) {
                        for(var n=0;n<node.childNodeList.length;n++){
                            for(var k=0;k<node.childNodeList[n].names.length;k++){
                                str += paramList[j][node.childNodeList[n].names[k]];
                            }
                        }
                    }
                 }else{
                     str+=this.outParam[node.names[i]];
                 }
            }
            if(str == ' '){
                return false;
            }
            return str;
        }
    },
    watch:{
        outParam:{
            handler:function(){
                this.node.text = this.outParam[this.node.names[0]];
            },
            deep:true
        }
    }
});
/*5*/
Vue.component('input-time', {
    template: '#input-time',
    props: {
        value:{
            type: Object,
            required: false
        },
        node:{
            type: Object,
            required: false
        },
    },
    data: function() {
         return {
            outParam:this.value
         };
    },
    methods:{
        setValue:function(name,value){
            this.$set(this.outParam,name,value);
        },
        getValue:function(name){
            return this.outParam[name];
        },
        showFour:function(event){
            var obj = event.currentTarget;
            var showDiv = $(obj).next('.log_behavior_show');
            if(showDiv.is(':hidden')){
                showDiv.slideDown(200);
                $(obj).parent('li').siblings('li').children('.log_behavior_show').slideUp(100);
            }else{
                showDiv.slideUp(100);
            }
            showDiv.find('.log_behavior_calendar').click(function(){
                showDiv.slideUp(100);
            });
        },
        isShow:function(node){
            var str='';
            for (var i = 0; i < node.names.length; i++) {
                 if(node.type=='input-five'){
                    var paramList=this.outParam[node.names[i]];
                    for (var j = 0; j < paramList.length; j++) {
                        for(var n=0;n<node.childNodeList.length;n++){
                            for(var k=0;k<node.childNodeList[n].names.length;k++){
                                str += paramList[j][node.childNodeList[n].names[k]];
                            }
                        }
                    }
                }else{
                    str+=this.outParam[node.names[i]];
                }
            }
            if(str == ' '){
                return false;
            }
            return str;
        }
    },
    watch:{
        outParam:{
            handler:function(){
                this.node.text = this.outParam[this.node.names[0]];
                this.node.secondText = this.outParam[this.node.names[1]];
            },
            deep:true
        }
    }
});
/*6*/
Vue.component('input-double', {
    template: '#input-double',
    props: {
        value:{
            type: Object,
            required: false
        },
        node:{
            type: Object,
            required: false
        },
    },
    data: function() {
         return {
            outParam:this.value
         };
    },
    methods:{
        setValue:function(name,value){
            this.$set(this.outParam,name,value);
        },
        getValue:function(name){
            return this.outParam[name];
        },
        showFour:function(event){
            var obj = event.currentTarget;
            var showDiv = $(obj).next('.log_behavior_show');
            if(showDiv.is(':hidden')){
                showDiv.slideDown(200);
                $(obj).parent('li').siblings('li').children('.log_behavior_show').slideUp(100);
            }else{
                showDiv.slideUp(100);
            }
            showDiv.find('.log_behavior_calendar').click(function(){
                showDiv.slideUp(100);
            });
        },
        isShow:function(node){
            var str='';
            for (var i = 0; i < node.names.length; i++) {
                 if(node.type=='input-five'){
                    var paramList=this.outParam[node.names[i]];
                    for (var j = 0; j < paramList.length; j++) {
                        for(var n=0;n<node.childNodeList.length;n++){
                            for(var k=0;k<node.childNodeList[n].names.length;k++){
                                str += paramList[j][node.childNodeList[n].names[k]];
                            }
                        }
                    }
                }else{
                    str+=this.outParam[node.names[i]];
                }
            }
            if(str == ' '){
                return false;
            }
            return str;
        }
    },
    watch:{
        outParam:{
            handler:function(){
                this.node.text = this.outParam[this.node.names[0]];
                this.node.secondText = this.outParam[this.node.names[1]];
            },
            deep:true
        }
    }
});
/*7*/
Vue.component('select-one-all', {
    template: '#select-one-all',
    props: {
        value:{
            type: Object,
            required: false
        },
        node:{
            type: Object,
            required: false
        },
    },
    data: function() {
         return {
            outParam:this.value
         };
    },
    methods:{
        setValue:function(name,value){
            var val = '';
            if(this.getValue(name).indexOf(value) >= 0){
                var str='';
                var arr=this.getValue(name).split(',');
                for (var i=0;i<arr.length;i++) {
                    if(arr[i]!=value&&arr[i] != ''){
                        if(str==''){
                            str+=arr[i];
                        }else{
                            str+=(','+arr[i]);
                        }
                       
                    }
                }
                val = str;
            }else{
                if(this.getValue(name)!=''){
                     val +=this.getValue(name)+','+value;
                }else{
                    val =value;
                }
            }
            this.$set(this.outParam,name,val);
        },
        getValue:function(name){
            return this.outParam[name];
        },
        showOne:function(event){
            var obj = event.currentTarget;
            var showDiv = $(obj).next('.log_behavior_show');
            if(showDiv.is(':hidden')){
                showDiv.slideDown(200);
                $(obj).parent('li').siblings('li').children('.log_behavior_show').slideUp(100);
            }else{
                showDiv.slideUp(100);
            }
        },
        isShow:function(node){
            var str='';
            for (var i = 0; i < node.names.length; i++) {
                 if(node.type=='input-five'){
                    var paramList=this.outParam[node.names[i]];
                    for (var j = 0; j < paramList.length; j++) {
                        for(var n=0;n<node.childNodeList.length;n++){
                            for(var k=0;k<node.childNodeList[n].names.length;k++){
                                str += paramList[j][node.childNodeList[n].names[k]];
                            }
                        }
                    }
                 }else{
                     str+=this.outParam[node.names[i]];
                 }
            }
            if(str == ' '){
                return false;
            }
            return str;
        }
    },
    watch:{
        outParam:{ 
            handler: function () {
                var n = this.outParam[this.node.names[0]].split(',');
                var str = '';
                for(var i=0;i<n.length;i++){
                    for(var j=0;j<this.node.items.length;j++){
                        if(this.node.items[j].id == n[i]){
                            if(n[i] >= 1&& n[i] != 'undefind'){
                                str += this.node.items[j].name+',';
                            }
                        }
                    }
                }
                this.node.text = str;
            },
            deep:true
        }
    }
});
/*8*/
Vue.component('input-five', {
    template: '#input-five',
    props: {
        value:{
            type: Object,
            required: false
        },
        node:{
            type: Object,
            required: false
        }
    },
    data: function() {
         return {
            outParam:this.value,
            list: []
         };
    },
    created:function(){
        if(this.outParam[this.node.names[0]]!=''){
            this.list=this.outParam[this.node.names[0]];
        }else{
            var obj={};
            for (var i=0;i<this.node.childNodeList.length;i++) {
                var _node=this.node.childNodeList[i];
                for(var j=0;j<_node.names.length;j++){
                    this.$set(obj,_node.names[j],'');
                }
            }
            this.list.push(obj);
        }
    },
    methods:{
        getValue:function(name){
            return this.outParam[name];
        },
        becomeString:function(place,index){
            return place.split(',')[index];
        },
        deleteOne:function(index){
             this.list.splice(index, 1);
        },
        showSix:function(event){
            var obj = event.currentTarget;
            var showDiv = $(obj).next('.log_behavior_show');
            if(showDiv.is(':hidden')){
                showDiv.slideDown(200);
                $(obj).parent('li').siblings('li').children('.log_behavior_show').slideUp(100);
            }else{
                showDiv.slideUp(100);
            }
            showDiv.children('.log_behavior_form_sure').click(function(){
                showDiv.slideUp(100);
            });
        },
        addNode:function(){
            if(this.list=='')this.list=[];
            var obj={};
            for (var i=0;i<this.node.childNodeList.length;i++) {
                var _node=this.node.childNodeList[i];
                for(var j=0;j<_node.names.length;j++){
                    this.$set(obj,_node.names[j],'');
                }
            }
            this.list.push(obj);
        },
        setChildValue:function(obj,name,event){
            var target = event.currentTarget.value;
            this.$set(obj,name,target);
        },
        getChildValue:function(obj,name){
            return obj[name];
        },
        isShow:function(node){
            var str='';
            for (var i = 0; i < node.names.length; i++) {
                 if(node.type=='input-five'){
                    var paramList=this.outParam[node.names[i]];
                    for (var j = 0; j < paramList.length; j++) {
                        for(var n=0;n<node.childNodeList.length;n++){
                            for(var k=0;k<node.childNodeList[n].names.length;k++){
                                str += paramList[j][node.childNodeList[n].names[k]];
                            }
                        }
                    }
                 }else{
                     str+=this.outParam[node.names[i]];
                 }
            }
            if(str == ' '){
                return false;
            }
            return str;
        }
    },
    watch:{
         list:{
            handler: function () {
                this.$set(this.outParam,this.node.names[0],this.list);
            },
            deep:true
        },
        outParam:{ 
            handler: function () {
                this.list=this.getValue(this.node.names[0]);
            },
            deep:true
        }

    }
});

/*result*/
Vue.component('right-result', {
    template: '#right-result',
    props: {
        value:{
            type: Object,
            required: false
        },
        node:{
            type: Object,
            required: false
        }
    },
    data: function() {
         return {
            outParam:this.value,
         };
    },
    methods:{
        setValue:function(name,value){
            this.$set(this.outParam,name,value);
        },
        getValue:function(name){
            return this.outParam[name];
        },
        getChildValue:function(obj,name){
            return obj[name];
        },
        setText:function(node,text){
            var val = '';
            if(node.text.indexOf(text) >= 0){
                var str='';
                var arr=node.text.split(',');
                for (var i=0;i<arr.length;i++) {
                    if(arr[i]!=text&&arr[i] != ''){
                        if(str==''){
                            str+=arr[i];
                        }else{
                            str+=(','+arr[i]);
                        }
                    }
                }
                val = str;
            }else{
                if(node.text!=''){
                     val +=node.text+','+text;
                }else{
                    val =text;
                }
            }
            node.text=val;
        },
        clearText:function(node){
            node.text = '';
        },
        clearFive:function(){
            this.$set(this.outParam,this.node.names[0],'');
        },
        isShow:function(obj,node){
            var str='';
            for(var i=0;i<node.childNodeList.length;i++){
                for(var j=0;j<node.childNodeList[i].names.length;j++){
                    str += obj[node.childNodeList[i].names[j]];
                }
            }
            if(str == ' '){
                return false;
            }
            return str;
        }
    }
});

new Vue({
    el: '#inquire',
    data: {
        active: '1',
        logTitles:[],
        activeblock: '1',
        param: '', 
        outParam:{},//传出查询条件
    },
    created:function(){
        //添加维度数组
        var arr = nodeParam.shift().wides;
        for(var n=0;n<arr.length;n++){
            $.Map.put(arr[n].wide,arr[n].wideName);
        }
        for (key in $.Map.datamap) {
            var obj={};
            obj.id=key;
            obj.name=$.Map.datamap[key];
            this.logTitles.push(obj);
        }
        //字符串转换为数组
        for(var k=0;k<nodeParam.length;k++){
            var newNames = eval("("+nodeParam[k].names+")");
            this.$set(nodeParam[k],'names',newNames);
            var newItems = eval("("+nodeParam[k].items+")");
            this.$set(nodeParam[k],'items',newItems);
            var newChildNodeList = eval("("+nodeParam[k].childNodeList+")");
            this.$set(nodeParam[k],'childNodeList',newChildNodeList);
        }
        //初始化输出变量
        this.param = nodeParam;
        for(var i =0;i<this.param.length ;i++){
            for(var j=0;j<this.param[i].names.length;j++){
                this.$set(this.outParam,this.param[i].names[j],"");
            }
        }
    },
    methods: {
        setValue:function(name,value){
            this.$set(this.outParam,name,value);
        },
        getValue:function(name){
            return this.outParam[name];
        },
        isShow:function(node){
            var str='';
            for (var i = 0; i < node.names.length; i++) {
                 if(node.type=='input-five'){
                    var paramList=this.outParam[node.names[i]];
                    for (var j = 0; j < paramList.length; j++) {
                        for(var n=0;n<node.childNodeList.length;n++){
                            for(var k=0;k<node.childNodeList[n].names.length;k++){
                                str += paramList[j][node.childNodeList[n].names[k]];
                            }
                        }
                    }
                 }else{
                     str+=this.outParam[node.names[i]];
                 }
            }
            if(str == ' '){
                return false;
            }
            return str;
        },
        //左边tab切换
        ctabs:function(i,v){
            this.active = i;
            this.activeblock = v;
        }
    }
});



function logBehaviorBtn(){
    $(".log_behavior").css({
        'width':$('.tone_bg').width(),
        'top': -$(this).height()
    });
    if($(".log_behavior_left").height()>$(".log_behavior_rightt").height()){
        $(".log_behavior_rightt").css('height',$(".log_behavior_left").height());
    }else {
        $(".log_behavior_left").css('height',$(".log_behavior_rightt").height());
    }
    $(".log_behavior").children(".log_behavior_rightt").css('width',$('.tone_bg').width()-$(".log_behavior_left").width()-3);
    $(".log_behavior_btn").click(function(event){
        $(".log_behavior").animate({
            'top': '10px'
        },400);
        event.stopPropagation();
    });
    $(".log_behavior").find(".log_behavior_right_btn").children("a").click(function(){
        $(".log_behavior").animate({
            'top': -$(".log_behavior").height()
        },300);
    });
}






/*----------------------查询条件-会员查询-----------------------*/

var memberParam ={
    //第一块
    memberOpentime:{
        title: '开户时间',
    },
    memberApplytime:{
        title: '申请时间',
    },
    memberSuperiorBroker:{
        title: '上级',
    },
    memberProvinceBroker:{
        title: '省级经纪会员',
    },
    memberOpenSource:{
        title: '开户来源',
        items: [{
            name: 'PC'
        },{
            name: 'Android'
        },{
            name: 'iOS'
        }]
    },
    memberOpenType:{
        title: '开户类型',
        items: [{
            name: '个人开户'
        },{
            name: '机构开户'
        }]
    },
    memberSex:{
        title: '性别',
        items: [{
            name: '男'
        },{
            name: '女'
        }]
    },
    memberAge:{
        title: '年龄',
    },
    memberGrade:{
        title: '会员等级',
        items: [{
            name: 'VIP0'
        },{
            name: 'VIP1'
        },{
            name: 'VIP2'
        },{
            name: 'VIP3'
        },{
            name: 'VIP4'
        },{
            name: 'VIP5'
        }]
    },
    memberOpenState:{
        title: '开户状态',
        items: [{
            name: '已注册'
        },{
            name: '审核中'
        },{
            name: '审核驳回'
        },{
            name: '审核通过'
        }]
    },
    memberTiecard:{
        title: '是否绑卡',
        items: [{
            name: '是'
        },{
            name: '否'
        }]
    },
    memberDeposit:{
        title: '是否入金',
        items: [{
            name: '是'
        },{
            name: '否'
        }]
    },
    memberState:{
        title: '会员状态',
        items: [{
            name: '正常'
        },{
            name: '冻结交易'
        },{
            name: '冻结出金'
        },{
            name: '冻结入金'
        },{
            name: '冻结申购'
        },{
            name: '销户'
        }]
    },
    memberIPsite:{
        title: 'IP地址',
    },
    memberMACsite:{
        title: 'MAC地址',
    },


    //第二块
    memberArea:{
        title: '地区',
        items: [{
                province :'湖南省',
                citys: [{
                    name: '长沙市'
                },{
                    name: '株洲市'
                },{
                    name: '湘潭市'
                }]
            },{
                province :'浙江省',
                citys: [{
                    name: '杭州市'
                },{
                    name: '苏州市'
                }]
            },{
                province :'广东省',
                citys: [{
                    name: '广州市'
                },{
                    name: '中山市'
                }]
            }]
    },
    memberType: {
        title: '会员类型',
        items: [{
            name: '普通会员'
        },{
            name: '经纪会员'
        },{
            name: '委托发售方'
        },{
            name: '市场公司'
        },{
            name: '运营公司'
        },{
            name: '交易所'
        }]
    },
    memberTerminal: {
        title: '终端',
        items: [{
            name: 'PC'
        },{
            name: 'App'
        }]
    },
    memberReptdt: {
        title: '统计日期',
    },

    //第三块
    memberIndicator: {
        title: '开户指标',
        items: [{
            name: '申请'
        },{
            name: '通过'
        },{
            name: '未通过'
        }]
    }

};



new Vue({
    el: '#inquireMember',
    data: {
        active: '0',
        //左边tab头
        logTitles: [{
            name: '基本',
        },{
            name: '维度',
        },{
            name: '指标',
        }],
        activeblock: '0',
        //左边选择一
        memberParam:memberParam,

        baseParam:{
            //第一块
            opentimeNum1: '',//开户时间
            opentimeNum2: '',
            applytimeNum1: '',//申请时间
            applytimeNum2: '',
            superiorBrokerVal: '',//上级
            provinceBrokerVal: '',//省级经纪会员
            openSourceVal: '',//开户来源
            openTypeVal: '',//开户类型
            sexVal: '',//性别
            ageNum1: '',//年龄
            ageNum2: '',
            gradeVal: '',//会员等级
            openStateVal: '',//开户状态
            tiecardVal: '',//是否绑卡
            depositVal: '',//是否入金
            stateVal: '',//会员状态
            IPsiteVal: '',//IP地址
            MACsiteVal: '',//MAC地址

            //第二块
            areaProvince: '',//地区
            areaCitys: '',
            typeVal: '',//会员类型
            terminalVal: '',//终端
            reptdtNum1: '',//统计日期
            reptdtNum2: '',
            //第三块
            indicatorVal: '',
        }
    },
    methods: {
        //左边tab切换
        ctabs(i,v){
            this.active = i;
            this.activeblock = v;
        },
        //左边收缩功能
        show(event){
            var obj = event.currentTarget;
            var showDiv = $(obj).next('.log_behavior_show');
            if(showDiv.is(':hidden')){
                showDiv.slideDown(200);
                $(obj).parent('li').siblings('li').children('.log_behavior_show').slideUp(100);
            }else{
                showDiv.slideUp(100);
            }
            showDiv.children('p').click(function(){
                showDiv.slideUp(100);
            });
        },
        showOne(event){
            var obj = event.currentTarget;
            var showDiv = $(obj).next('.log_behavior_show');
            if(showDiv.is(':hidden')){
                showDiv.slideDown(200);
                $(obj).parent('li').siblings('li').children('.log_behavior_show').slideUp(100);
            }else{
                showDiv.slideUp(100);
            }
        },
        showTwo(event){
            var obj = event.currentTarget;
            var showDiv = $(obj).next('.log_behavior_show');
            if(showDiv.is(':hidden')){
                showDiv.slideDown(200);
                $(obj).parent('li').siblings('li').children('.log_behavior_show').slideUp(100);
            }else{
                showDiv.slideUp(100);
            }
            showDiv.find('.log_tier_child').find('li').click(function(){
                $(this).parents('.log_tier_child').hide();
                showDiv.slideUp(100);
            });
        },
        showTwoOne(event){
            var obj = event.currentTarget;
            $(obj).next('.log_tier_child').show().parent('li').siblings('li').children('.log_tier_child').hide();
        },
        showThree(event){
            var obj = event.currentTarget;
            var showDiv = $(obj).next('.log_behavior_show');
            if(showDiv.is(':hidden')){
                showDiv.slideDown(200);
                $(obj).parent('li').siblings('li').children('.log_behavior_show').slideUp(100);
            }else{
                showDiv.slideUp(100);
            }
            showDiv.children('.log_behavior_twoipt_tol').children('a').click(function(){
                showDiv.slideUp(100);
            });
        },
        showFour(event){
            var obj = event.currentTarget;
            var showDiv = $(obj).next('.log_behavior_show');
            if(showDiv.is(':hidden')){
                showDiv.slideDown(200);
                $(obj).parent('li').siblings('li').children('.log_behavior_show').slideUp(100);
            }else{
                showDiv.slideUp(100);
            }
            showDiv.find('.log_behavior_calendar').click(function(){
                showDiv.slideUp(100);
            });
        },
        showFive(event){
            var obj = event.currentTarget;
            var showDiv = $(obj).next('.log_behavior_show');
            if(showDiv.is(':hidden')){
                showDiv.slideDown(200);
                $(obj).parent('li').siblings('li').children('.log_behavior_show').slideUp(100);
            }else{
                showDiv.slideUp(100);
            }
            showDiv.find('.log_behavior_oneipt_tol').children('a').click(function(){
                showDiv.slideUp(100);
            });
        },
        showSix(event){
            var obj = event.currentTarget;
            var showDiv = $(obj).next('.log_behavior_show');
            if(showDiv.is(':hidden')){
                showDiv.slideDown(200);
                $(obj).parent('li').siblings('li').children('.log_behavior_show').slideUp(100);
            }else{
                showDiv.slideUp(100);
            }
            showDiv.children('.log_behavior_form_sure').click(function(){
                showDiv.slideUp(100);
            });
        },
        //多选
        replaces(value,name){
            var str='';
            var arr=value.split(' ');
            for (var i=0;i<arr.length;i++) {
                if(arr[i]!=name&&arr[i] != ''){
                   str+=(' '+arr[i]);
                }
            }
            return str;
        },
    }
});
























