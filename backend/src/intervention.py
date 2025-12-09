# external
from screeninfo import get_monitors
from pynput.mouse import Controller

mouse = Controller()


async def getScreenCenter():
    for m in get_monitors():
        if m.is_primary:
            width = int(m.width)
            height = int(m.height)
            return [width // 2, height // 2]

async def intervene(controller) -> None:
    center = await getScreenCenter()
    mouse.position = (center[0], center[1])
    controller.send_msg("INTERVENE")