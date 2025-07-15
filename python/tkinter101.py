from tkinter import *
from tkinter.messagebox import showinfo

def reply():
    showinfo(title = "popup", message = "Button pressed!")

window = Tk()
button = Button(window, text="Press me", command=reply)
button.pack()
window.mainloop()