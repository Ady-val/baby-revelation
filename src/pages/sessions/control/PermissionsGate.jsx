import { cloneElement } from "react";
import { useAuth } from "../../../auth/AuthFunctions";
import { PERMISSIONS } from "../../../data/permission-maps";

const hasPermission = ({ permissions, scopes }) => {
  const scopesMap = {};
  scopes.forEach((scope) => {
    scopesMap[scope] = true;
  });

  return permissions.some((permission) => scopesMap[permission]);
};

export default function PermissionsGate({
  children,
  scopes = []
}) {
  const { data } = useAuth();
  const permissions = PERMISSIONS[data.userType];

  const permissionGranted = hasPermission({ permissions, scopes });

  if (!permissionGranted) return <></>

  return {children};
}
