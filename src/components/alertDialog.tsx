import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "./ui/alert-dialog";

type DialogProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
    title: string;
    description: string;
}

export default function AlertDialogCustom({open, setOpen, title, description}: DialogProps) {
    return(
        <AlertDialog open={open}>
          <AlertDialogContent className="bg-[#363245] border-orange-400 text-white">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-orange-400">{title}</AlertDialogTitle>
              <AlertDialogDescription className="text-gray-200">
                {description}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction onClick={() => setOpen(!open)} className="bg-orange-400 hover:bg-orange-500 text-[#2c273e] cursor-pointer">
                OK
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
    )
}