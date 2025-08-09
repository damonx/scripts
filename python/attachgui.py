from tkinter import *
from tkinter102 import MyGui

# main app window
mainwin = Tk("Damonx")
Label(mainwin, text=__name__).pack()

# popup window
popup = Toplevel()
Label(popup, text='Attach').pack(sid=LEFT)
MyGui(popup).pack(side=RIGHT)
mainwin.mainloop()