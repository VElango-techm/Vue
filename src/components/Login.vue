<template>
  <div class="bg_img">
    <div class="row mt-3 mx-2">
      <div class="col-3 pl-4">
        <img src="../assets/techm_logo.png" />
      </div>  
      <div class="col-8 text-right mt-2">
        <h4>VIEW COMPONENT PORTAL</h4>
      </div>
      <div class="col-1 text-left ">
        <img src="../assets/vue_logo.png" width="50%" />
      </div>
    </div> 

  
    <div class="row d-flex align-items-center homeContent">
      <div class="col-7 align-middle">
        <img src="../assets/uxm_logo.png" />
      </div>
      
      <div class="col-3 formField px-5">
        <b-form >
          <b-form-group id="input-group-1" label="User Name:" label-for="input-1" class="text-left">
            <b-form-input
              id="input-1"
              v-model.trim="$v.user.$model"
              :class="{'is-invalid' :$v.user.$error}"
              required
              autocomplete="off"
              placeholder="Enter your user name"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Password:" label-for="input-2" class="text-left">
            <b-form-input
              id="input-2"
              type="password"
              v-model.trim="$v.password.$model"
              :class="{'is-invalid' :$v.password.$error}"
              required
              autocomplete="off"
              placeholder="Enter your user name"
            ></b-form-input>
          </b-form-group>
        </b-form >
        <b-button type="reset" variant="danger">Reset</b-button>
        <b-button type="submit" variant="primary" class="ml-2">Submit</b-button>
      </div>
    </div> 
    
  </div>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import axios from "axios";

export default {  
  name: "HelloWorld",
  data(){
    return{
      user:'',
      password:'',
      info: null
    }
  },
  validations:{
      user:{
        required,
        minLength: minLength(4),
        maxLength: maxLength(25)
      },
      password:{
        required,
        minLength: minLength(4),
        maxLength: maxLength(25)
      }
    },
    mounted(){
      axios
        .get('https://randomuser.me/api/')
        .then(res=> this.info = res)
        setTimeout(()=>{
          console.log('re', this.info)
        },2000)
        
    }
  }
</script>


<style scoped>
div {
  color:#EEE
}
.bg_img{
  height:700px;
  max-width:100%;
  overflow-x: hidden;
  background-image: url(../assets/vue_bg.png);
}

.homeContent{
  height:550px;
  text-align: center;
}

.formField{
  border: 2px solid #41B883;
  background-color: rgba(255, 255, 255, 0.1);
  height: 350px;
  vertical-align: middle;
  padding-top: 50px;
}

.text-blue{
  color:#35495E
}


</style>
