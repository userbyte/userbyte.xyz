"use client";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Notification } from "@/app/library/models/misc";

type SiteContextType = {};

export const SiteContext = createContext<SiteContextType | undefined>(
  undefined
);

export const SiteProvider = (props: { children: React.ReactNode }) => {
  return (
    <SiteContext.Provider value={{}}>{props.children}</SiteContext.Provider>
  );
};
