import { Button } from "@shadcn/components/ui/button";
import WebsiteSettingsDrawer from './WebsiteSettingsDrawer';


const ControlButton = () => {
  return (
    <div className='flex items-center space-x-2'>
      <WebsiteSettingsDrawer />
      
      <Button>Login</Button>
    </div>
  )
}

export default ControlButton;