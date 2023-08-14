import type { ReactNode } from 'react'
import React from 'react'

/**
 * @description
 * A Utility component which takes children and renders them out.
 *
 * It is used in-conjuction with ```If``` component.
 *
 * @see Docs https://github.com/Ashish-simpleCoder/classic-react-components#else
 *
 * @example
   import { If, Else } from 'classic-react-components'
   import Modal from "./Modal"
   export default function YourComponent() {
      const [show, setShow] = useState(false)
      return (
         <div>
            <If conditon={show}>
               <Modal />
               <Else>
                  <h3>Fallback content</h3>
               </Else>
            </If>
      </div>
   )}
*/
export default function Else({ children = null }: { children?: ReactNode }) {
   return <>{children}</>
}
