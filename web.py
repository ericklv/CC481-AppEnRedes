import gi
gi.require_version('Gtk', '3.0')
from gi.repository import Gtk,WebKit

windows= Gtk.Window()
webview=WebKit.WebView()
headerbar=Gtk.HeaderBar()
headerbar.set_show_close_button(True)

scrolled_window=Gtk.ScrolledWindow()

webview.open("https://www.gnome.org/")
#windows.set_title("A ver ps xd")

def on_destroy(window):
	Gtk.main_quit()

def on_enter(entry):
	url = entry.get_text()
	print(url)


#window.add(webview)
scrolled_window.add(webview)
windows.add(scrolled_window)
windows.set_titlebar(headerbar)
windows.set_default_size(800,600)

windows.show_all()
windows.connect("destroy",on_destroy)
Gtk.main()
