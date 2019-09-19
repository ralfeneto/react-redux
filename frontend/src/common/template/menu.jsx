import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'
import about from './about'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='/' label='Dashboard' icon='dashboard' />
        <MenuTree label='Cadastro' icon='edit'> 
            <MenuItem path='billingCycles'
                label='Ciclos de Pagamentos' icon='usd' />
        </MenuTree>
        <MenuItem path='about' label='Sobre' icon='connectdevelop'/>
    </ul>
)