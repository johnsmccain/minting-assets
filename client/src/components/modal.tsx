import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog'

export const Modal = () => {
  return (
    <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
  )
}
