"use client";
import { useEffect, useState } from "react";
import PersonalInformationForm from "./personal-information-form";

const PersonalInformationContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(false);

  const fetchUserDetail = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/me", {
        method: "GET",
      });
      const data = await response.json();
      console.log(data?.data);
      const result = data?.data;

      if (result && Object.keys(result).length) {
        setUserData(result);
        setIsLoading(false);
      }
    } catch (error: any) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserDetail();
  }, []);

  return (
    <div className="p-4">
      {isLoading ? (
        <div>Loading... </div>
      ) : (
        <PersonalInformationForm userData={userData} />
      )}
    </div>
  );
};

export default PersonalInformationContainer;
