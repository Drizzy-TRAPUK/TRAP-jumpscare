RegisterCommand("jumpscare", function(source, args, rawCommand)
    TriggerClientEvent("jumpscare:show", -1)
    

    SetTimeout(11000, function()
        local resourceName = GetCurrentResourceName()
        print("Stopping resource: " .. resourceName)
        ExecuteCommand("stop " .. resourceName)
    end)
end, false)


RegisterServerEvent("jumpscare:reloadResource")
AddEventHandler("jumpscare:reloadResource", function()
    local src = source
    local resourceName = GetCurrentResourceName()
    print("Reloading resource: " .. resourceName)
    ExecuteCommand("restart " .. resourceName)
end)
