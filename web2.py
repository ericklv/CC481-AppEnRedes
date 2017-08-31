# -*- coding: utf-8 -*-

import gi
gi.require_version('Gtk', '3.0')
from gi.repository import Gtk,WebKit

windows= Gtk.Window()
webview=WebKit.WebView()
headerbar=Gtk.HeaderBar()
headerbar.set_show_close_button(True)
go_back_button=Gtk.Button("Back")
go_forward_button=Gtk.Button("Forward")
go_reload_button=Gtk.Button("Refresh")
go_history_button=Gtk.Button("History")
go_homepage_button=Gtk.Button("Home")
#go.back.connect("clicked",lambda x: webview.go_back())
#go_back_arrow=Gtk.Image.new_from_icon_name("go-previus",Gtk.IconSize.SMALL_TOOLBAR)
#go_back_button.add(go_back_arrow)
#No hay metodo on_go_back

def on_enter(entry):
        url = entry.get_text()
        webview.open(url)

        if (url == "about:history"):
			webview.open("/tmp/history.html")
			return
        else:
            url= "http://"+url
		
        history_file = open("/tmp/history.html","a+")
        history_file.writelines("* " + url + "<br>")
        history_file.close()
        webview.open(url)
        
def on_go_back(widget,data=None):
        webview.go_back()

def on_go_forward(widget,data=None):
        webview.go_forward()

def on_go_reload(widget,data=None):
        webview.reload()

def on_go_history(widget,data=None):
        webview.open("/tmp/history.html")

def go_homepage(widget, data=None):
    page_="http://www.google.com"
    webview.load_uri(page_)

entry=Gtk.Entry()
entry.connect("activate",on_enter)
go_back_button.connect("clicked",on_go_back)
go_forward_button.connect("clicked",on_go_forward)
go_reload_button.connect("clicked",on_go_reload)
go_history_button.connect("clicked",on_go_history)
go_homepage_button.connect("clicked",go_homepage)
#headerbar.set_custom_title(entry)

headerbar.pack_start(go_back_button)
headerbar.pack_start(go_forward_button)
headerbar.pack_start(go_reload_button)
headerbar.pack_start(entry)
headerbar.pack_start(go_history_button)
headerbar.pack_start(go_homepage_button)

scrolled_window=Gtk.ScrolledWindow()

webview.open("https://www.redhat.com")
#windows.set_title("A ver ps xd")

def on_destroy(window):
    Gtk.main_quit()

#window.add(webview)
scrolled_window.add(webview)
windows.add(scrolled_window)
windows.set_titlebar(headerbar)
windows.set_default_size(800,600)

windows.show_all()
windows.connect("destroy",on_destroy)
Gtk.main()
