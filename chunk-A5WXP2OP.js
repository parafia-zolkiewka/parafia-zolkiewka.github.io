import{Ab as oe,Fb as ae,Hb as le,Jb as W,Ma as U,Na as l,Qa as B,T as x,Ua as V,V as k,X as m,Zb as ue,_ as T,a as d,ab as re,b as g,ca as M,da as te,e as h,ea as j,fa as y,hb as u,ib as c,la as ne,lb as f,n as J,oa as ie,qb as v,s as C,sa as G,t as Q,ta as E,tb as R,ub as H,vb as $,wb as L,xb as se,z as ee}from"./chunk-EQ2FM6JB.js";var ye=(()=>{let e=class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(r){return new(r||e)(l(B),l(G))},e.\u0275dir=y({type:e});let t=e;return t})(),Ne=(()=>{let e=class e extends ye{};e.\u0275fac=(()=>{let n;return function(s){return(n||(n=ie(e)))(s||e)}})(),e.\u0275dir=y({type:e,features:[V]});let t=e;return t})(),ve=new m("");var Pe={provide:ve,useExisting:x(()=>S),multi:!0};function xe(){let t=W()?W().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var ke=new m(""),S=(()=>{let e=class e extends ye{constructor(n,r,s){super(n,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!xe())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(r){return new(r||e)(l(B),l(G),l(ke,8))},e.\u0275dir=y({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&f("input",function(o){return s._handleInput(o.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(o){return s._compositionEnd(o.target.value)})},features:[L([Pe]),V]});let t=e;return t})();var Te=new m(""),je=new m("");function _e(t){return t!=null}function Ce(t){return oe(t)?J(t):t}function Ve(t){let e={};return t.forEach(i=>{e=i!=null?d(d({},e),i):e}),Object.keys(e).length===0?null:e}function De(t,e){return e.map(i=>i(t))}function Ge(t){return!t.validate}function be(t){return t.map(e=>Ge(e)?e:i=>e.validate(i))}function Ue(t){if(!t)return null;let e=t.filter(_e);return e.length==0?null:function(i){return Ve(De(i,e))}}function Ae(t){return t!=null?Ue(be(t)):null}function Be(t){if(!t)return null;let e=t.filter(_e);return e.length==0?null:function(i){let n=De(i,e).map(Ce);return ee(n).pipe(Q(Ve))}}function Me(t){return t!=null?Be(be(t)):null}function de(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Re(t){return t._rawValidators}function He(t){return t._rawAsyncValidators}function z(t){return t?Array.isArray(t)?t:[t]:[]}function w(t,e){return Array.isArray(t)?t.includes(e):t===e}function ce(t,e){let i=z(e);return z(t).forEach(r=>{w(i,r)||i.push(r)}),i}function he(t,e){return z(e).filter(i=>!w(t,i))}var I=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ae(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Me(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},q=class extends I{get formDirective(){return null}get path(){return null}},A=class extends I{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},K=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},$e={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},wt=g(d({},$e),{"[class.ng-submitted]":"isSubmitted"}),Ee=(()=>{let e=class e extends K{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(l(A,2))},e.\u0275dir=y({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&re("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[V]});let t=e;return t})();var D="VALID",F="INVALID",_="PENDING",b="DISABLED";function Le(t){return(O(t)?t.validators:t)||null}function We(t){return Array.isArray(t)?Ae(t):t||null}function ze(t,e){return(O(e)?e.asyncValidators:t)||null}function qe(t){return Array.isArray(t)?Me(t):t||null}function O(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var Z=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===D}get invalid(){return this.status===F}get pending(){return this.status==_}get disabled(){return this.status===b}get enabled(){return this.status!==b}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(ce(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(ce(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(he(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(he(e,this._rawAsyncValidators))}hasValidator(e){return w(this._rawValidators,e)}hasAsyncValidator(e){return w(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=_,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=b,this.errors=null,this._forEachChild(n=>{n.disable(g(d({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(g(d({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=D,this._forEachChild(n=>{n.enable(g(d({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(g(d({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===D||this.status===_)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?b:D}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=_,this._hasOwnPendingAsyncValidator=!0;let i=Ce(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new E,this.statusChanges=new E}_calculateStatus(){return this._allControlsDisabled()?b:this.errors?F:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(_)?_:this._anyControlsHaveStatus(F)?F:D}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){O(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=We(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=qe(this._rawAsyncValidators)}};var Fe=new m("CallSetDisabledState",{providedIn:"root",factory:()=>Y}),Y="always";function Ke(t,e){return[...e.path,t]}function Ze(t,e,i=Y){Xe(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Je(t,e),et(t,e),Qe(t,e),Ye(t,e)}function fe(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function Ye(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function Xe(t,e){let i=Re(t);e.validator!==null?t.setValidators(de(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=He(t);e.asyncValidator!==null?t.setAsyncValidators(de(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();fe(e._rawValidators,r),fe(e._rawAsyncValidators,r)}function Je(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&we(t,e)})}function Qe(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&we(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function we(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function et(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function tt(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function nt(t){return Object.getPrototypeOf(t.constructor)===Ne}function it(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(s=>{s.constructor===S?i=s:nt(s)?n=s:r=s}),r||n||i||null}function pe(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function ge(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var rt=class extends Z{constructor(e=null,i,n){super(Le(i),ze(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),O(i)&&(i.nonNullable||i.initialValueIsDefault)&&(ge(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){pe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){pe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ge(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var st={provide:A,useExisting:x(()=>X)},me=Promise.resolve(),X=(()=>{let e=class e extends A{constructor(n,r,s,a,o,p){super(),this._changeDetectorRef=o,this.callSetDisabledState=p,this.control=new rt,this._registered=!1,this.name="",this.update=new E,this._parent=n,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=it(this,a)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let r=n.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),tt(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Ze(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){me.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let r=n.isDisabled.currentValue,s=r!==0&&le(r);me.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?Ke(n,this._parent):[n]}};e.\u0275fac=function(r){return new(r||e)(l(q,9),l(Te,10),l(je,10),l(ve,10),l(ae,8),l(Fe,8))},e.\u0275dir=y({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[M.None,"disabled","isDisabled"],model:[M.None,"ngModel","model"],options:[M.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[L([st]),V,ne]});let t=e;return t})();var ot=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=j({type:e}),e.\u0275inj=k({});let t=e;return t})();var Ie=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:Fe,useValue:n.callSetDisabledState??Y}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=j({type:e}),e.\u0275inj=k({imports:[ot]});let t=e;return t})();var Se="token";function N(){return`salt=${new Date().getTime()}`}var Tt=(()=>{let e=class e{constructor(){this.httpClient=T(ue),this.owner="parafia-zolkiewka",this.repo="parafia-zolkiewka.github.io",this.branch="master",this.apiKey="",this.date=""}ngOnInit(){this.apiKey=localStorage.getItem(Se)||""}saveTokenToStorage(n){localStorage.setItem(Se,n)}onUpload(){return h(this,null,function*(){if(!(!this.announcementsFile&&!this.intentionsFile)){try{yield this.fetchAndUpdateFile(this.announcementsFile,"ogloszenia"),yield this.fetchAndUpdateFile(this.intentionsFile,"intencje")}catch(n){console.error("Error uploading files:",n)}yield this.onReloadContent()}})}fetchAndUpdateFile(n,r){return h(this,null,function*(){if(!n)return;let s=this.apiKey,a=this.date,o=`src/assets/${r}/${a}.html`;try{let p=yield C(this.httpClient.get(`https://api.github.com/repos/${this.owner}/${this.repo}/contents/${o}?ref=${this.branch}&${N()}`,{headers:{Authorization:`Bearer ${s}`}}));console.log("Updating existing file"),yield this.updateFile(n,r,a,o,s,p.sha)}catch{console.log("Creating a new file"),yield this.updateFile(n,r,a,o,s,null)}})}base64(n){return h(this,null,function*(){return new Promise((r,s)=>{let a=new FileReader;if(!n)return s();a.readAsDataURL(n),a.onloadend=()=>{let o=a.result;r(o.split(",")[1])}})})}updateFile(n,r,s,a,o,p){return h(this,null,function*(){this.saveTokenToStorage(o);try{let P=yield C(this.httpClient.put(`https://api.github.com/repos/${this.owner}/${this.repo}/contents/${a}?${N()}`,{message:`upload file ${r}/${s}.html [skip ci]`,content:yield this.base64(n),branch:this.branch,sha:p},{headers:{"Content-Type":"application/json",Authorization:`Bearer ${o}`}}));console.log("success",P)}catch(P){console.error("error",P)}})}onReloadContent(){return h(this,null,function*(){let n="date.txt",r=this.apiKey,s=new Date().toISOString();try{let a=yield C(this.httpClient.get(`https://api.github.com/repos/${this.owner}/${this.repo}/contents/${n}?ref=${this.branch}&${N()}`,{headers:{Authorization:`Bearer ${r}`}}));console.log("Updating existing file"),yield this.reloadContent(n,s,a.sha,r)}catch{console.log("Creating a new file"),yield this.reloadContent(n,s,null,r)}})}reloadContent(n,r,s,a){return h(this,null,function*(){this.saveTokenToStorage(a);try{let o=yield C(this.httpClient.put(`https://api.github.com/repos/${this.owner}/${this.repo}/contents/${n}?${N()}`,{message:`Reload content ${r}`,content:yield this.base64(new File([r],"date.txt")),branch:this.branch,sha:s},{headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`}}));console.log("Content reload triggered successfully",o)}catch(o){console.error("Error triggering content reload:",o)}})}onAnnouncementsFileChange(n){this.announcementsFile=n.target.files?.[0]}onIntentionsFileChange(n){this.intentionsFile=n.target.files?.[0]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=te({type:e,selectors:[["app-admin-panel"]],standalone:!0,features:[se],decls:16,vars:2,consts:[["placeholder","token",3,"ngModelChange","ngModel"],[3,"click"],["placeholder","data (yyyy-mm-dd)",3,"ngModelChange","ngModel"],["type","file","accept",".htm",3,"change"]],template:function(r,s){r&1&&(u(0,"p"),v(1,"admin-panel works!"),c(),u(2,"div")(3,"input",0),$("ngModelChange",function(o){return H(s.apiKey,o)||(s.apiKey=o),o}),c(),u(4,"button",1),f("click",function(){return s.onUpload()}),v(5,"Zaktualizuj"),c(),u(6,"button",1),f("click",function(){return s.onReloadContent()}),v(7,"Aktualizuj galeri\u0119"),c()(),u(8,"div")(9,"input",2),$("ngModelChange",function(o){return H(s.date,o)||(s.date=o),o}),c()(),u(10,"div"),v(11," Og\u0142oszenia: "),u(12,"input",3),f("change",function(o){return s.onAnnouncementsFileChange(o)}),c()(),u(13,"div"),v(14," Intencje: "),u(15,"input",3),f("change",function(o){return s.onIntentionsFileChange(o)}),c()()),r&2&&(U(3),R("ngModel",s.apiKey),U(6),R("ngModel",s.date))},dependencies:[Ie,S,Ee,X]});let t=e;return t})();export{Tt as AdminPanelComponent};
