import{_ as n,r as i,b as o,o as s,c as a,a as h,t as r,F as l,d as c}from"./index.cd2cb6df.js";const d={data(){return{error:!1,loading:!0,juzs:i([]),isijuzs:i([])}},watch:{$route(){this.getJuz,this.getIsiJuz()}},mounted(){this.getJuz(),this.getIsiJuz()},methods:{getJuz(){o.get("https://api.quran.com/api/juzs"+this.$route.params.id).then(t=>{this.juzs=t.data.juz}).catch(t=>{console.log(t),this.error=!0}).finally(()=>this.loading=!1)},getIsiJuz(){o.get("https://api.quran.com/api/v4/quran/verses/uthmani?juz_number="+this.$route.params.id).then(t=>{this.isijuzs=t.data.verses}).catch(t=>{console.log(t),this.error=!0}).finally(()=>this.loading=!1)}}},p={class:"text-end mt-5"};function m(t,g,z,_,u,f){return s(),a("div",p,[h("h2",null,"Juz "+r(t.$route.params.id),1),(s(!0),a(l,null,c(u.isijuzs,e=>(s(),a("h4",{key:e.id,class:"text-lg--end mt-5"},r(e.text_uthmani)+" "+r(e.verse_key),1))),128))])}var J=n(d,[["render",m]]);export{J as default};
