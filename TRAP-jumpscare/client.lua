
RegisterNetEvent("jumpscare:show")
AddEventHandler("jumpscare:show", function()
    print("Jumpscare event triggered") 
    SetNuiFocus(true, true)
    SendNUIMessage({ type = 'showJumpscare' })
end)

RegisterNUICallback('close', function(data, cb)
    SetNuiFocus(false, false)
    cb('ok')
    
    TriggerServerEvent("jumpscare:reloadResource")
end)
