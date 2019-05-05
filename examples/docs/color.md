## Color 色彩

> 九种默认颜色，可用于改变许多组件的颜色

<style lang='less'>
@primary: #3880ff;
@Secondary: #0cd1e8;
@Tertiary:#7044ff;
@Success: #10dc60;
@Warning: #ffce00;
@Danger: #f04141;
@Dark:#222428;
@Medium: #989aa2;
@Light:#f4f5f8;
:root {
    --primary: @primary;
    --primary-shade: shade(@primary,20%);
    --primary-tint:  tint(@primary, 10%);
    --Secondary: @Secondary;
    --Secondary-shade: shade(@Secondary,20%);
    --Secondary-tint:  tint(@Secondary, 10%);
    --Tertiary: @Tertiary;
    --Tertiary-shade: shade(@Tertiary,20%);
    --Tertiary-tint:  tint(@Tertiary, 10%);
    --Success: @Success;
    --Success-shade: shade(@Success,20%);
    --Success-tint:  tint(@Success, 10%);
    --Warning: @Warning;     
    --Warning-shade: shade(@Warning,20%);
    --Warning-tint:  tint(@Warning, 10%);
    --Danger: @Danger;
    --Danger-shade: shade(@Danger,20%);
    --Danger-tint:  tint(@Danger, 10%);
    --Dark: @Dark;
    --Dark-shade: shade(@Dark,20%);
    --Dark-tint:  tint(@Dark, 10%);
    --Medium: @Medium;
    --Medium-shade: shade(@Medium,20%);
    --Medium-tint:  tint(@Medium, 10%);
    --Light: @Light;
    --Light-shade: shade(@Light,20%);
    --Light-tint:  tint(@Light, 10%);

}
.color-menu-text{
    display: flex;
    align-items: center;
    height: 55px;
        padding-left: 20px;
        cursor: pointer;
}
.color-menu-value{
    margin-left: auto;
    padding-right: 40px;

}
.color-menu{
    color:#fff;
}
.color-menu-item{
    margin-bottom: 5px;
}
.class-meni-icon{
    margin-right: 10px;
    
}
.color-submenu-item .color-menu-text{
    height: 40px;
    margin-right: 16px;
}
.hidden{
    display: none;
}

.show{
    display: none;
}
</style>

<ul class="color-menu">
    <li class="color-menu-item" style="background-color: var(--primary)" > 
        <div class="color-menu-text">primary
            <div class="color-menu-value">#3880ff</div>
            <i class="ion-icon ion-ios-arrow-down class-meni-icon"> <i>
        </div>
        <ul class="color-submenu hidden">
            <li class="color-submenu-item"  style="background-color: var(--primary-shade)">
              <div class="color-menu-text">Shade
                 <div class="color-menu-value"></div>
              </div>
            </li>
           <li class="color-submenu-item" style="background-color: var(--primary-tint)">
                <div class="color-menu-text">Tint
                    <div class="color-menu-value"></div>
                 </div>
              </li>
        </ul>
    </li>
    <li class="color-menu-item" style="background-color: var(--Secondary)">
        <div class="color-menu-text">Secondary
            <div class="color-menu-value">#0cd1e8</div>
             <i class="ion-icon ion-ios-arrow-down class-meni-icon"> <i>
        </div>
        <ul class="color-submenu hidden">
            <li class="color-submenu-item" style="background-color: var(--Secondary-shade)">
              <div class="color-menu-text">Secondary
                 <div class="color-menu-value"></div>
              </div>
            </li>
            <li class="color-submenu-item" style="background-color: var(--Secondary-tint)">
                <div class="color-menu-text">Secondary
                    <div class="color-menu-value"></div>
                 </div>
            </li>
        </ul>
    </li>
    <li class="color-menu-item" style="background-color: var(--Tertiary)">
        <div class="color-menu-text">Tertiary
            <div class="color-menu-value">#7044ff</div>
            <i class="ion-icon ion-ios-arrow-down class-meni-icon"> <i>
        </div>
        <ul class="color-submenu hidden">
            <li class="color-submenu-item" style="background-color: var(--Tertiary-shade)">
              <div class="color-menu-text">Tertiary
                 <div class="color-menu-value"></div>
              </div>
            </li>
             <li class="color-submenu-item" style="background-color: var(--Tertiary-tint)">
                <div class="color-menu-text">Tertiary
                    <div class="color-menu-value"></div>
                 </div>
              </li>
        </ul>
    </li>
    <li class="color-menu-item" style="background-color: var(--Success)">
        <div class="color-menu-text">Success
        <div class="color-menu-value">#10dc60</div>
        <i class="ion-icon ion-ios-arrow-down class-meni-icon"> <i>
        </div>
        <ul class="color-submenu hidden">
            <li class="color-submenu-item" style="background-color: var(--Success-shade)">
              <div class="color-menu-text">Success
                 <div class="color-menu-value"></div>
              </div>
            </li>
             <li class="color-submenu-item" style="background-color: var(--Success-tint)">
                <div class="color-menu-text">Success
                    <div class="color-menu-value"></div>
                 </div>
            </li>
        </ul>
    </li>
    <li class="color-menu-item" style="background-color: var(--Warning)">
        <div class="color-menu-text">Warning
        <div class="color-menu-value">#ffce00</div>
         <i class="ion-icon ion-ios-arrow-down class-meni-icon"> <i>
         </div>
          <ul class="color-submenu hidden">
            <li class="color-submenu-item" style="background-color: var(--Warning-shade)">
              <div class="color-menu-text">Warning
                 <div class="color-menu-value"></div>
              </div>
            </li>
             <li class="color-submenu-item" style="background-color: var(--Warning-tint)">
                <div class="color-menu-text">Warning
                    <div class="color-menu-value"></div>
                 </div>
              </li>
        </ul>
    </li>
    <li class="color-menu-item" style="background-color: var(--Danger)">
        <div class="color-menu-text">Danger
        <div class="color-menu-value">#f04141</div>
         <i class="ion-icon ion-ios-arrow-down class-meni-icon"> <i>
         </div>
          <ul class="color-submenu hidden">
            <li class="color-submenu-item" style="background-color: var(--Danger-shade)">
              <div class="color-menu-text">Danger
                 <div class="color-menu-value"></div>
              </div>
            </li>
             <li class="color-submenu-item" style="background-color: var(--Danger-tint)">
                <div class="color-menu-text">Danger
                    <div class="color-menu-value"></div>
                 </div>
              </li>
        </ul>
    </li>
    <li class="color-menu-item" style="background-color: var(--Dark)">
        <div class="color-menu-text">Dark
        <div class="color-menu-value">#222428</div>
         <i class="ion-icon ion-ios-arrow-down class-meni-icon"> <i>
         </div>
          <ul class="color-submenu hidden">
            <li class="color-submenu-item"  style="background-color: var(--Dark-shade)">
              <div class="color-menu-text">Dark
                 <div class="color-menu-value"></div>
              </div>
            </li>
             <li class="color-submenu-item" style="background-color: var(--Dark-tint)">
                <div class="color-menu-text">Dark
                    <div class="color-menu-value"></div>
                 </div>
              </li>
        </ul>
    </li>
    <li class="color-menu-item" style="background-color: var(--Medium)">
        <div class="color-menu-text">Medium
        <div class="color-menu-value">#989aa2</div>
         <i class="ion-icon ion-ios-arrow-down class-meni-icon"> <i>
         </div>
          <ul class="color-submenu hidden">
            <li class="color-submenu-item" style="background-color: var(--Medium-shade)">
              <div class="color-menu-text">Medium
                 <div class="color-menu-value"></div>
              </div>
            </li>
             <li class="color-submenu-item" style="background-color: var(--Medium-tint)">
                <div class="color-menu-text">Medium
                    <div class="color-menu-value"></div>
                 </div>
              </li>
        </ul>
    </li>
    <li class="color-menu-item" style="background-color: var(--Light);color:#000">
        <div class="color-menu-text">Light
        <div class="color-menu-value">#f4f5f8</div>
         <i class="ion-icon ion-ios-arrow-down class-meni-icon"> <i>
         </div>
          <ul class="color-submenu hidden">
            <li class="color-submenu-item" style="background-color: var(--Light-shade)">
              <div class="color-menu-text">Light
                 <div class="color-menu-value"></div>
              </div>
            </li>
             <li class="color-submenu-item" style="background-color: var(--Light-tint)">
                <div class="color-menu-text">Light
                    <div class="color-menu-value"></div>
                 </div>
              </li>
        </ul>
    </li>
</ul>

<script>
   window.onload =  function(){
        var eles =  document.querySelectorAll('.color-menu-text');
        for(var i = 0;i<eles.length;i++){
            eles[i].addEventListener('click',handleClick,false)
        }
        var submenu = document.querySelectorAll('.color-submenu'); 
        function handleCls(cls,ele){
             var clsReg = new RegExp(cls, 'ig');
             var str = ele.className
            
            if(!clsReg.test(str)){
                ele.className = ele.className + ' ' + cls
            }else{
                ele.className = ele.className.replace(cls, '')
                 
            }
        }
        function handleClick(e){
            for(var i = 0;i<submenu.length;i++){
              submenu[i].className='color-submenu hidden'
            }
            var ele = e.target;
            while(ele.parentElement.nodeName !== 'LI' ){
                ele = ele.parentElement
            }
            ele = ele.nextElementSibling
            if(!ele)return;
            handleCls('hidden',ele)      
        }
        
        
   }
</script>
