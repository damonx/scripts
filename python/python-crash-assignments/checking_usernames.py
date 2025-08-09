current_users = ["damonx", "ianx", "elodiexu", "zoel", "rosemaryw"]
new_users = ["damonx", "zoel", "jennyf", "dhivyab"]

for new_user in new_users:
    if new_user.lower() in current_users:
        print(f"Username {new_user} has been take, please use another one.")
    else:
        print(f"Username {new_user} is available.")
