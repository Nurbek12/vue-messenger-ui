<template>
  <ul :class="`smiles ${drrr?'':'on'}`" :style="{display:`${smb?'flex':'none'}`}">
      <li v-for="(smile,s) in smiles" :key="s"
       @click="$emit('smileExp',smile)" >
          {{ smile }}
      </li>
  </ul>
</template>

<script>
export default {
    name:'Smile',
    props:['smb','drrr'],
    data(){
        return{
            smiles:[
                '😀','😁','😂','🤣','😃','😄',
                '😅','😆','😉','😊','😋','😎',
                '😍','😘','🥰','😗','😙','😚',

                '🙂','🤗','🤩','🤔','🤨','😐',
                '😑','😶','🙄','😏','😣','😥',
                '😮','🤐','😪','😫','🥱','😴',

                '😌','😛','😜','😝','🤤','😒',
                '😓','😔','😕','🙃','🤑','😲',
                '🙁','😖','😞','😟','😤','😢',
                
                '😭','😦','😧','😨','😩','🤯',
                '😬','😰','😱','🥵','🥶','😳',
                '🤪','😵','🥴','😠','😡','🤬',
                
                '😷','🤒','🤕','🤢','🤮','🤧',
                '😇','🥳','🥺','🤠','🤡','🤥',
                '🤫','🤭','🧐','🤓','😈','👿',
                '🤦‍♀️','🤦‍♂️','💁‍♂️','🙋‍♂️','🙋‍♀️','💁‍♀️',
                '🙆‍♂️','🙆‍♀️','💪','🦶','👂','🤏',
                '👈','👉','☝','👆','👇','✌','🤞',
                '🖖','🤙','🖐','✋','👌','👍','👎',
                '✊','👊','🤛','🤜','🤚','👋','🤟',
                '✍','👏','👐','🙌','🤲','🙏',
                '🤝','🪓','🔪','⏰',
            ]
        }
    },
}
</script>

<style>
:root{
    --dark: #212d3b;
    --darkcolor: #d6dde4;
}
.smiles.on{
    --dark: #fff;
    --darkcolor: #000;
}
.smiles{
    position: absolute;
    width: 270px;
    height: 338px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    /* border: 1px solid #fff; */
    transform: translate(5px,-190px);
    background: var(--dark);
    transition: .3s;
}
.smiles li{
    position: relative;
    padding: 1px;
    cursor: pointer;
    margin: 1px;
    list-style-type: none;
}
.smiles li:active{
    background: #fff2;
}
</style>