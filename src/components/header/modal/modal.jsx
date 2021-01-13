import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import {
  DialogContent,
  Dialog,
  Slide,
  IconButton,
  Button,
  Typography,
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";
import CallMadeIcon from "@material-ui/icons/CallMade";

import { colors } from "../../../theme";
import HeaderLogo from "../logo/logo";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const styles = (theme) => ({
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    background: `linear-gradient(0deg, ${colors.greyBackground}, ${colors.greyBackground})`,
    minWidth: "100%",
    minHeight: "100%",
    overflow: "hidden",
    position: "relative",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0px 35px",
  },
  backgroundImageContainer: {
    position: "absolute",
    left: "0px",
    top: "0px",
    right: "0px",
    bottom: "0px",
    "& > img": {
      width: "100%",
      height: "100%",
      opacity: "0.3",
    },
  },
  closeButton: {
    position: "absolute",
    right: "32px",
    paddingTop: "0px",
  },
  linkContainer: {
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& > div": {
      marginTop: "30px",
    },
    padding: "30px",
    flex: 1,
  },
  linkGroupContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  linkGroupTitle: {
    fontFamily: "Formular",
    fontWeight: "600",
    fontStyle: "normal",
    fontSize: "12px",
    lineHeight: "14.68px",
    letterSpacing: "0.67px",
    marginLeft: "20px",
    color: colors.white,
  },

  logoContainer: {
    position: "absolute",
    left: "32px",
    paddingTop: "0px",
  },
  buyButtonContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "90px",
  },
  buyButton: {
    background: "#3865D3",
    borderRadius: "8px",
    color: "white",
    width: "150px",
    height: "44px",
    fontFamily: "Formular",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "22px",
    padding: "14px",
    "&:hover": {
      opacity: "0.8",
      background: "#3865D3",
    },
  },
  linkGroup: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    gridGap: "30px",
    padding: "25px",
    width: "100%",
  },
  linkProductsItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    cursor: "pointer",
    "&:hover": {
      opacity: "0.8",
    },
  },

  linkProductsItemDisabled: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    opacity: "0.5",
  },

  linkProductsItemImage: {
    width: "25px",
    height: "25px",
    marginRight: "15px",
  },

  linkProductsItemInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  linkProductsItemTitle: {
    fontFamily: "Formular",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: "12px",
    lineHeight: "14.68px",
    letterSpacing: "0.67px",
    color: colors.white,
  },

  linkProductsItemTitleTag: {
    backgroundColor: "#5F5D4B",
    borderRadius: "3px",
    color: "#EECB70",
    padding: "5px",
    fontSize: "8px",
    marginLeft: "10px",
  },
});

class RedirectModal extends Component {
  renderMenuItem = (
    logoUrl,
    title,
    link,
    isComingSoon,
    isExternalLink = true
  ) => {
    const { classes } = this.props;
    return (
      <div
        className={
          !isComingSoon
            ? classes.linkProductsItem
            : classes.linkProductsItemDisabled
        }
        onClick={() => {
          if (!isComingSoon) {
            if (isExternalLink) {
              window.open(link);
            } else {
              this.nav(link);
            }
          }
        }}
      >
        <img
          className={classes.linkProductsItemImage}
          src={logoUrl}
          alt="logo"
        />
        <div className={classes.linkProductsItemInfo}>
          <Typography className={classes.linkProductsItemTitle}>
            {title}
            {isComingSoon && (
              <span className={classes.linkProductsItemTitleTag}>SOON</span>
            )}
          </Typography>
        </div>
      </div>
    );
  };

  nav = (url) => {
    this.props.history.push(url);
  };

  render() {
    const { classes, closeModal, modalOpen } = this.props;

    const fullScreen = window.innerWidth < 768;

    return (
      <Dialog
        open={modalOpen}
        onClose={closeModal}
        fullWidth={true}
        maxWidth={"sm"}
        TransitionComponent={Transition}
        fullScreen={fullScreen}
      >
        <DialogContent classes={{ root: classes.root }}>
          <div className={classes.backgroundImageContainer}>
            <img
              src={require("../../../assets/yfl-blur-up.svg")}
              alt="background"
            />
          </div>
          <div className={classes.logoContainer}>
            <HeaderLogo />
          </div>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={closeModal}
          >
            <CloseIcon
              style={{ color: colors.white, width: "32px", height: "32px" }}
            />
          </IconButton>
          <div className={classes.linkContainer}>
            <div className={classes.linkGroupContainer}>
              <Typography className={classes.linkGroupTitle}>
                Products
              </Typography>
              <div className={classes.linkGroup}>
                {this.renderMenuItem(
                  require("../../../assets/linkswap.svg"),
                  "Linkswap",
                  "https://linkswap.app",
                  false
                )}
                {this.renderMenuItem(
                  require("../../../assets/linkcheck.svg"),
                  "Linkcheck",
                  "",
                  true
                )}
                {this.renderMenuItem(
                  require("../../../assets/waffle.svg"),
                  "Wafflehouse",
                  "",
                  true
                )}
                {this.renderMenuItem(
                  require("../../../assets/linkpad.svg"),
                  "Linkpad",
                  "",
                  true
                )}
              </div>
            </div>
            <div className={classes.linkGroupContainer}>
              <Typography className={classes.linkGroupTitle}>
                Ressources
              </Typography>
              <div className={classes.linkGroup}>
                {this.renderMenuItem(
                  require("../../../assets/linkswap.svg"),
                  "Analytics",
                  "https://info.linkswap.app",
                  false
                )}
                {this.renderMenuItem(
                  require("../../../assets/linkswap.svg"),
                  "APY Calculator",
                  "https://apycalc.yflink.io/",
                  false
                )}
                {this.renderMenuItem(
                  require("../../../assets/linkswap.svg"),
                  "Learn",
                  "https://learn.yflink.io/",
                  false
                )}
                {this.renderMenuItem(
                  require("../../../assets/linkswap.svg"),
                  "APY Calculator",
                  "https://calculator.yflink.io/",
                  false
                )}
              </div>
            </div>
            <div className={classes.linkGroupContainer}>
              <Typography className={classes.linkGroupTitle}>
                Governance
              </Typography>
              <div className={classes.linkGroup}>
                {this.renderMenuItem(
                  require("../../../assets/vote.svg"),
                  "Stake & Vote",
                  "./stake",
                  false,
                  false
                )}
                {this.renderMenuItem(
                  require("../../../assets/stake.svg"),
                  "LP Rewards",
                  "https://rewards.linkswap.app/",
                  false
                )}
                {this.renderMenuItem(
                  require("../../../assets/linkswap.svg"),
                  "Linksmas",
                  "./linksmas-2020",
                  false,
                  false
                )}
              </div>
            </div>
          </div>
          <div className={classes.buyButtonContainer}>
            <Button
              variant="contained"
              className={classes.buyButton}
              onClick={() => {
                window.open(
                  "https://linkswap.app/#/swap?outputCurrency=0x28cb7e841ee97947a86b06fa4090c8451f64c0be"
                );
              }}
            >
              Buy YFL
              <CallMadeIcon
                style={{
                  color: "white",
                  width: "18px",
                  height: "18px",
                  marginLeft: "14px",
                }}
              />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
}
export default withRouter(withStyles(styles)(RedirectModal));
