'use client'
import { useTheme } from "next-themes"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { Button } from "@shadcn/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@shadcn/components/ui/drawer";
import { Field, FieldContent, FieldDescription, FieldLabel, FieldTitle } from '@shadcn/components/ui/field';
import { Switch } from '@shadcn/components/ui/switch';
import { ReactNode, useState } from 'react';
import useIsMobile from '@/components/shared/hooks/use-is-mobile';

interface RowSettingsProps {
  title: string;
  description: string;
  htmlFor: string;
  children: ReactNode
}
const RowSettings = ({ title, description, htmlFor, children }: RowSettingsProps) => {
  return (
    <FieldLabel htmlFor={htmlFor}>
      <Field orientation="horizontal">
        <FieldContent>
          <FieldTitle>{title}</FieldTitle>
          <FieldDescription>
            {description}
          </FieldDescription>
        </FieldContent>
        {children}
      </Field>
    </FieldLabel>
  )
}

const WebsiteSettingsDrawer = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false)
  const { isMobile } = useIsMobile();
  
  const isDark = theme === "dark";

  return (
    <Drawer
      open={open}
      onOpenChange={setOpen}
      showSwipeHandle={isMobile}
      swipeDirection={isMobile ? "down" : "right"}>
      <DrawerTrigger 
        render={<Button size="icon" variant="outline"><FontAwesomeIcon icon={faCog} /></Button>} 
      />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Website Settings</DrawerTitle>
          <DrawerDescription>Customize your app preferences</DrawerDescription>
        </DrawerHeader>
        <div className='p-4'>
          <RowSettings 
            title='Dark mode'
            description='Switch between light and dark appearance.'
            htmlFor='dark-mode-switch'>
            <Switch 
              id='dark-mode-switch' 
              checked={isDark}
              onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
              />
          </RowSettings>
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button variant="outline" />}>Close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer> 
  )
}

export default WebsiteSettingsDrawer;