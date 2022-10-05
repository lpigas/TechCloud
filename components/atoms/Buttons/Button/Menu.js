import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRef } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "0",
  },
}));
export default function MenuListComposition({ data }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const router = useRouter();
  const newData = [
    ...data,
    { link: "/login", id: "url_login", title: "Login" },
    { link: "/cart", id: "url_cart", title: "Корзина" },
  ];
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event, link) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
    link && router.push(link);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div
      className={`${classes.root} w-full flex items-center justify-between sticy mb-8`}
    >
      <Image
        onClick={() => router.push("/")}
        src={"/image/logo1_1.png"}
        width={101}
        height={62}
        className={"mt-2"}
      />
      <div className="text-[24px] font-bold relative z-10">
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Menu
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    {newData.map((item) => (
                      <div className="h-10" key={item.link}>
                        <MenuItem
                          onClick={(event) => handleClose(event, item.link)}
                        >
                          {item.title}
                        </MenuItem>
                      </div>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
