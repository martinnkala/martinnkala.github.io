import tkinter as tk
from random import randint


def main():
    # The width and height of the scene window.
    width = 800
    height = 500

    # Create the Tk root object.
    root = tk.Tk()
    root.geometry(f"{width}x{height}")

    # Create a Frame object.
    frame = tk.Frame(root)
    frame.master.title("Scene")
    frame.pack(fill=tk.BOTH, expand=1)

    # Create a canvas object that will draw into the frame.
    canvas = tk.Canvas(frame)
    canvas.pack(fill=tk.BOTH, expand=1)

    # Call the draw_scene function.
    draw_scene(canvas, 0, 0, width-1, height-1)

    root.mainloop()


def draw_scene(canvas, scene_left, scene_top, scene_right, scene_bottom):
    """Draw a scene in the canvas. scene_left, scene_top,
    scene_right, and scene_bottom contain the extent in
    pixels of the region where the scene should be drawn.
    Parameters
        scene_left: left side of the region; less than scene_right
        scene_top: top of the region; less than scene_bottom
        scene_right: right side of the region
        scene_bottom: bottom of the region
    Return: nothing

    If needed, the width and height of the
    region can be calculated like this:
    scene_width = scene_right - scene_left + 1
    scene_height = scene_bottom - scene_top + 1
    """
    # Call your functions here, such as draw_sky, draw_ground,
    # draw_snowman, draw_tree, draw_shrub, etc.
    tree_center = scene_left + 90
    tree_top = scene_top + 100
    tree_height = 150
    draw_sky(canvas,scene_left, scene_top, scene_right, scene_bottom)
    draw_sun(canvas,10, 10, 100, 100)
    for i in range(1,8):
        draw_pine_tree(canvas, tree_center * i, tree_top, tree_height)
    draw_moon(canvas,100,100,40,40)
    draw_ground(canvas,0,scene_bottom,scene_right, scene_bottom-100)
    for j in range(20):
        draw_stones(canvas,1 * randint(10, 200), 1 * randint(scene_bottom - 100, 475), 1 * randint(10,200), 1 * randint(scene_bottom - 100, 475))
    


# Define more functions here, like draw_sky, draw_ground,
# draw_cloud, draw_tree, draw_kite, draw_snowflake, etc.


def draw_pine_tree(canvas, peak_x, peak_y, height):
    """Draw a single pine tree.
    Parameters
        canvas: The tkinter canvas where this
            function will draw a pine tree.
        peak_x, peak_y: The x and y location in pixels where
            this function will draw the top peak of a pine tree.
        height: The height in pixels of the pine tree that
            this function will draw.
    Return: nothing
    """
    trunk_width = height / 10
    trunk_height = height / 8
    trunk_left = peak_x - trunk_width / 2
    trunk_right = peak_x + trunk_width / 2
    trunk_bottom = peak_y + height

    skirt_width = height / 2
    skirt_height = height - trunk_height
    skirt_left = peak_x - skirt_width / 2
    skirt_right = peak_x + skirt_width / 2
    skirt_bottom = peak_y + skirt_height

    # Draw the trunk of the pine tree.
    canvas.create_rectangle(trunk_left, skirt_bottom,
            trunk_right, trunk_bottom,
            outline="gray20", width=1, fill="tan3")

    # Draw the crown (also called skirt) of the pine tree.
    canvas.create_polygon(peak_x, peak_y,
            skirt_right, skirt_bottom,
            skirt_left, skirt_bottom,
            outline="gray20", width=1, fill="dark green")

def draw_sky(canvas, rec_left, rec_top, rec_right, rec_bottom):
    canvas.create_rectangle(rec_left, rec_top, rec_right, rec_bottom, fill ="black")
def draw_sun(canvas,sun_left, sun_top, sun_right, sun_bottom):
    canvas.create_oval(sun_left, sun_top, sun_right, sun_bottom, fill = "grey")
def draw_moon(canvas,x,y,x1,y1):
    canvas.create_oval(x,y,x1,y1, fill="white")
def draw_ground(canvas,linex,liney,linex1,liney1):
    canvas.create_rectangle(linex,liney,linex1,liney1, fill ="skyblue")
def draw_stones(canvas, stonex,stoney,stonex1,stoney1):
    canvas.create_oval(stonex,stoney,stonex1,stoney1, fill ="black")
 
    




# Call the main function so that
# this program will start executing.
main()